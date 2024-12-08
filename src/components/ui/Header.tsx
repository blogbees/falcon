import { FiLogOut, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md p-4 flex items-center justify-between">
      {/* Falcon Title */}
      <h1 className="text-xl font-bold">
        🌟 Welcome to <span className="text-yellow-100">Falcon Interactive Labs! ✨ Learn! 🚀 Imagine!  🌈 Explore!</span>
      </h1>
    </header>
  );
};

export default Header;