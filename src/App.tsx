import React, { useState } from 'react';
import Header from './components/Header';
import SubjectGrid from './components/SubjectGrid';
import SubjectPage from './components/SubjectPage';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'romana' | 'matematica' | 'fizica' | 'geografie'>('home');

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSubjectClick = (subject: 'romana' | 'matematica' | 'fizica' | 'geografie') => {
    setCurrentPage(subject);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage !== 'home') {
    return (
      <div className="min-h-screen bg-[#f9fafb] font-['Poppins',_sans-serif]">
        <SubjectPage subject={currentPage} onBack={handleBackToHome} />
        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Poppins',_sans-serif]">
      <Header onLoginClick={handleLoginClick} />
      <main>
        <SubjectGrid onSubjectClick={handleSubjectClick} />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;