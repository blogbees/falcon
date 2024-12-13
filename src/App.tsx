import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import FreePlay from './components/three/FreePlay';
import HandleMoon from './components/three/HandleMoon';
import HandlePingPong from './components/three/HandlePingPong';
import Header from './components/ui/Header';
import Home from './components/ui/Home';
import Sidebar from './components/ui/SideBar';
import TicTacToe from './components/three/Cards';
import Cards from './components/three/Cards';
const App = () => {
  return (
    <Router basename='/falcon'>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Content Area */}
          <main className="flex-1 bg-gray-900 text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/handle-moon" element={<HandleMoon />} />
              <Route path="/handle-pingpong" element={<HandlePingPong />} />
              <Route path="/free-play" element={<FreePlay />} />
              <Route path="/cards" element={<Cards />} />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
