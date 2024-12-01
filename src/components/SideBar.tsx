import { useState } from 'react';
import { FaBars, FaCog, FaCubes, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`bg-gray-800 text-white min-h-screen ${
        isMinimized ? 'w-20' : 'w-64'
      } transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {!isMinimized && <span className="font-bold">Falcon Options</span>}
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-700 p-2 rounded"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Navigation Items */}
      <nav className="p-4 space-y-4">
        {/* Vertex Mesh */}
        <Link
          to="/vertex-mesh"
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${
            isMinimized ? 'justify-center' : ''
          }`}
        >
          <FaCubes className="text-xl" />
          {!isMinimized && <span>Try Vertex</span>}
        </Link>
        {/* Playing Cards */}
        <Link
          to="/practice-cards"
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${
            isMinimized ? 'justify-center' : ''
          }`}
        >
          <FaHome className="text-xl" />
          {!isMinimized && <span>Playing Cards</span>}
        </Link>
        {/* Settings */}
        <Link
          to="/settings"
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${
            isMinimized ? 'justify-center' : ''
          }`}
        >
          <FaCog className="text-xl" />
          {!isMinimized && <span>Settings</span>}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;