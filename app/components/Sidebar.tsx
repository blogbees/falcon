import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 font-bold">Creative Labs</div>
      <button className="p-4 hover:bg-gray-600">Physics</button>
    </div>
  );
}
