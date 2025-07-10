import React, { useState } from 'react';
import HomePage   from './pages/HomePage';
import Diagnostic from './pages/Diagnostic';
import Surgery    from './pages/Surgery';
import Monitoring from './pages/Monitoring';

export default function App() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'diagnostic': return <Diagnostic />;
      case 'surgery':    return <Surgery />;
      case 'monitoring': return <Monitoring />;
      default:           return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav Bar */}
      <nav className="bg-[#2c3135] p-4 flex gap-4">
        <button onClick={() => setView('home')}      className="hover:underline">Home</button>
        <button onClick={() => setView('diagnostic')}className="hover:underline">Diagnostic</button>
        <button onClick={() => setView('surgery')}   className="hover:underline">Surgery</button>
        <button onClick={() => setView('monitoring')}className="hover:underline">Monitoring</button>
      </nav>
      {/* Active View */}
      <main className="flex-grow overflow-auto">
        {renderView()}
      </main>
    </div>
  );
}
