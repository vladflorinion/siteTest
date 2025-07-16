import React, { useState } from 'react';
import Header from './components/Header';
import SubjectGrid from './components/SubjectGrid';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Poppins',_sans-serif]">
      <Header onLoginClick={handleLoginClick} />
      <main>
        <SubjectGrid />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;