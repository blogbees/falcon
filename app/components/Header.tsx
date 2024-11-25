import React from 'react';

export default function Header() {
  return (
    <div className="bg-purple-800 text-white p-4 flex items-center">
      <div className="text-xl font-bold">Falcon - Interactive Lab</div>
      <div className="ml-auto space-x-4">
        <button className="hover:bg-purple-600 px-4 py-2 rounded">Home</button>
        <button className="hover:bg-purple-600 px-4 py-2 rounded">About</button>
        <button className="hover:bg-purple-600 px-4 py-2 rounded">Contact</button>
      </div>
    </div>
  );
}
