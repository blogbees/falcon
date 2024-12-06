import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import HandleMoon from './components/three/HandleMoon';
import HandleRubixCube from './components/three/HandleRubixCube';
import Header from './components/ui/Header';
import Home from './components/ui/Home';
import Sidebar from './components/ui/SideBar';
const App = () => {
  return (
    <Router>
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
              <Route path="/handle-rubix-cube" element={<HandleRubixCube />} />
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
