import { FiLogOut, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md p-4 flex items-center justify-between">
      {/* Logo or Dashboard Title */}
      <h1 className="text-xl font-bold">Falcon - Interactive Tutoring</h1>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {/* User Icon */}
        <div className="flex items-center space-x-2">
          <FiUser className="text-xl" />
          <span className="hidden sm:inline">SJ</span>
        </div>

        {/* Logout Button */}
        <button className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded hover:bg-red-700">
          <FiLogOut className="text-xl" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;