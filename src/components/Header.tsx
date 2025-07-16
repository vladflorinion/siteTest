import React from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-[#e8f0fe] py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#1e3a8a]">BACReady</h1>
        </div>
        
        <div className="flex-1 flex justify-center">
          <p className="text-lg text-[#1a1a1a] font-medium italic">
            "Pregătit azi, sigur mâine!"
          </p>
        </div>
        
        <button
          onClick={onLoginClick}
          className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-2 rounded-lg hover:bg-[#333] transition-all duration-200 hover:shadow-md hover:scale-105"
        >
          <User size={18} />
          Autentificare
        </button>
      </div>
    </header>
  );
};

export default Header;