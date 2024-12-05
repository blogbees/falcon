// Copyright 2023 The MediaPipe Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { useEffect, useRef } from 'react';
import { AudioClassifier, AudioClassifierResult, Classifications, FilesetResolver } from '@mediapipe/tasks-audio';

type AudioTrackingOptions = {
  minDetectionConfidence?: number;
  sampleRate?: number;
};

const useAudioDetection = (
  audioRef: React.RefObject<HTMLAudioElement | any>,
  onAudioDetected: (result: AudioClassifierResult[]) => void,
  options?: AudioTrackingOptions
) => {
  const audioRecognizerRef = useRef<AudioClassifier | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    // Initialize the AudioRecognizer instance
    const createAudioRecognizer = async () => {
      const audioFileset = await FilesetResolver.forAudioTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio@0.10.3/wasm'
      );
      audioRecognizerRef.current = await AudioClassifier.createFromOptions(audioFileset, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/audio_recognizer/audio_recognizer/float16/1/audio_recognizer.task',
          delegate: 'GPU'
        },
      });
    };
    createAudioRecognizer();

    const processAudio = async () => {
      if (audioRecognizerRef.current && audioRef.current) {
        const results = audioRecognizerRef.current.classify(audioRef.current, Date.now());
        if (results && results.length > 0) {
            onAudioDetected(results);

        }
      }
    };

    // Attach event listener to process audio data
    audioRef.current.addEventListener('dataavailable', processAudio);

    return () => {
      // Clean up the audio recognition instance
      audioRef.current?.removeEventListener('play', processAudio);
      audioRecognizerRef.current?.close();
      audioRecognizerRef.current = null;
    };
  }, [audioRef, options, onAudioDetected]);
};

export default useAudioDetection;
