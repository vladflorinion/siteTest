import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-[#1a1a1a] font-medium">© BACReady 2025</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#1a1a1a] transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#1a1a1a] transition-colors duration-200"
            >
              Despre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;