import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import HandTrackingCamera from './components/HandTrackingCamera';
import Header from './components/Header';
import Home from './components/Home';
import PracticeCards from './components/PracticeCards';
import Sidebar from './components/SideBar';
import VertexMesh from './components/VertexMesh';
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
              <Route path="/practice-cards" element={<PracticeCards />} />
              <Route path="/vertex-mesh" element={<VertexMesh />} />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <div className="absolute bottom-4 right-4 w-64 h-38 bg-white rounded-lg shadow-lg p-2">
                  <div className="relative w-full h-full">
                    <HandTrackingCamera />
                  </div>
             </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
