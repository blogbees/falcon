// components/Home.tsx

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/handle-moon");
  };

  return (
    <div className="bg-gradient-to-r from-grey-500 to-purple-500 min-h-screen text-white flex flex-col items-center">
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to <span className="text-yellow-300">Falcon Interactive Labs</span>
        </h1>
        <p className="text-lg italic">
          Explore, Experiment, and Experience Science like never before!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 md:px-20">
        <div className="bg-white text-blue-600 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300">
          <i className="fas fa-flask text-4xl text-purple-600 mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Physics Lab</h2>
          <p className="text-sm">
            Dive into the laws of motion, electricity, and gravity! Use your hands to move virtual objects and make discoveries.
          </p>
        </div>

        <div className="bg-white text-green-600 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300">
          <i className="fas fa-atom text-4xl text-blue-500 mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Chemistry Lab</h2>
          <p className="text-sm">
            Mix virtual chemicals, watch reactions, and learn the magic of molecules in a safe, fun environment.
          </p>
        </div>

        <div className="bg-white text-red-600 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300">
          <i className="fas fa-dna text-4xl text-green-600 mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Biology Lab</h2>
          <p className="text-sm">
            Explore the wonders of life by dissecting virtual specimens, studying cells, and more—all with your hands!
          </p>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-yellow-300 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition" onClick={handleButtonClick}>
          Start Exploring Now
        </button>
      </div>

      <footer className="mt-10 text-center text-xs opacity-80">
        <p>© 2024 Falcon Interactive Labs. All Rights Reserved.</p>
      </footer>
    </div>
  );

};

export default Home;
