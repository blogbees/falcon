import { useGesture } from '@use-gesture/react';
import { useState } from 'react';
import { animated, useSprings } from 'react-spring';

const tarotDeck = [
    'https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/08/crane.jpg?ssl=1',
    'https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/08/dump-trunk.jpg?ssl=1',
    // Add the rest of the tarot cards here...
];
const FlashCards = () => {
    const cards = [...tarotDeck];
    const [gone] = useState<Set<number>>(() => new Set()); // Tracks cards that are "gone"
    const [props, api] = useSprings(cards.length, (i) => ({
        x: 0,
        y: i * -4,
        scale: 1,
        rot: -10 + Math.random() * 20,
        delay: i * 100,
        from: { x: 0, y: -1000, scale: 1.5, rot: 0 },
    }));

    const bind = useGesture({
        onDrag: ({
            args: [index],
            down,
            movement: [xDelta],
            direction: [xDir],
            velocity,
        }) => {
            const velocityMagnitude = Math.sqrt(velocity[0] ** 2 + velocity[1] ** 2); // Calculate magnitude
            const trigger = velocityMagnitude > 0.2; // Trigger threshold
            const dir = xDir < 0 ? -1 : 1; // Direction: left (-1) or right (1)

            if (!down && trigger) gone.add(index); // Add to gone set if flicked

            api.start((i) => {
                if (index !== i) return; // Only update the current card

                const isGone = gone.has(index);
                const x = isGone
                    ? (200 + window.innerWidth) * dir
                    : down
                        ? xDelta
                        : 0; // Movement
                const rot = xDelta / 100 + (isGone ? dir * 10 * velocityMagnitude : 0); // Rotation
                const scale = down ? 1.1 : 1; // Scale when active

                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: {
                        friction: 50,
                        tension: down ? 800 : isGone ? 200 : 500,
                    },
                };
            });

            // Reset cards when all are gone
            if (!down && gone.size === cards.length) {
                setTimeout(() => {
                    gone.clear();
                    api.start((i) => ({
                        x: 0,
                        y: i * -4,
                        scale: 1,
                        rot: -10 + Math.random() * 20,
                    }));
                }, 600);
            }
        },
    });

    return (
        <div className="relative w-full h-full">
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div
                    key={i}
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{
                        transform: x.to((xVal) => `translate3d(${xVal}px,${y.get()}px,0)`),
                    }}
                >
                    <animated.div
                        {...bind(i)}
                        className="w-[45vh] max-w-[300px] h-[85vh] max-h-[570px] bg-white rounded-lg shadow-lg flex items-center justify-center"
                        style={{
                            transform: rot.to((rVal) =>
                                `perspective(1500px) rotateX(30deg) rotateY(${rVal / 10}deg) rotateZ(${rVal}deg) scale(${scale.get()})`
                            ),
                            backgroundImage: `url(${cards[i]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </animated.div>
            ))}
        </div>
    );
};

export default FlashCards;