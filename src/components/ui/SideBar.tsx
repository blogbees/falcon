import { useState } from 'react';
import { FaBars, FaCreditCard, FaFreeCodeCamp, FaGitlab, FaGolfBall, FaMoon, FaPlay, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`bg-gray-800 text-white min-h-screen ${isMinimized ? 'w-20' : 'w-64'
        } transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {!isMinimized && <span className="font-bold">Falcon Labs</span>}
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-700 p-2 rounded"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Navigation Items */}
      <nav className="p-4 space-y-4">
        {/* Handle Moon */}
        <Link
          to="/handle-moon"
          onClick={toggleSidebar}
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${isMinimized ? 'justify-center' : ''
            }`}
        >
          <FaMoon className="text-xl" />
          {!isMinimized && <span>Try to Handle Moon</span>}
        </Link>
        {/* Handle Ping Pong */}
        <Link
          to="/handle-pingpong"
          onClick={toggleSidebar}
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${isMinimized ? 'justify-center' : ''
            }`}
        >
          <FaGolfBall className="text-xl" />
          {!isMinimized && <span>Want to Play PingPong?</span>}
        </Link>
        {/* Handle Object */}
        <Link
          to="/free-play"
          onClick={toggleSidebar}
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${isMinimized ? 'justify-center' : ''
            }`}
        >
          <FaPlay className="text-xl" />
          {!isMinimized && <span>Want a Free Play?</span>}
        </Link>
        {/* Handle TicTacToe */}
        <Link
          to="/cards"
          onClick={toggleSidebar}
          className={`flex items-center space-x-4 hover:text-blue-400 cursor-pointer ${isMinimized ? 'justify-center' : ''
            }`}
        >
          <FaCreditCard className="text-xl" />
          {!isMinimized && <span>Play Cards?</span>}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;