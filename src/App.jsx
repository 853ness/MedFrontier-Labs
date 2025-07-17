import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage   from './pages/HomePage';
import Diagnostic from './pages/Diagnostic';
import Surgery    from './pages/Surgery';
import Monitoring from './pages/Monitoring';
import FourOFour from './pages/FourOFour';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Nav Bar */}
        <nav className="bg-[#2c3135] p-4 flex gap-4">
          <Link to="/"            className="hover:underline">Home</Link>
          <Link to="/diagnostic" className="hover:underline">Diagnostic</Link>
          <Link to="/surgery"    className="hover:underline">Surgery</Link>
          <Link to="/monitoring" className="hover:underline">Monitoring</Link>
        </nav>

        {/* Route View */}
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/"            element={<HomePage />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/surgery"    element={<Surgery />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="*" element={<FourOFour/>} /> {/* 404 Handler */} 
          </Routes>
        </main> 
      </div>
    </Router>
  );
}
