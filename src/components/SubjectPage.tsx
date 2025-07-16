import React from 'react';
import { ArrowLeft, BookOpen, PenTool, FileText } from 'lucide-react';

interface SubjectPageProps {
  subject: 'romana' | 'matematica' | 'fizica' | 'geografie';
  onBack: () => void;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ subject, onBack }) => {
  const subjectData = {
    romana: {
      title: 'Limba și literatura română',
      subtitle: 'Cuvintele construiesc lumea. Exprimă-te cu încredere.',
      bannerBg: 'bg-gradient-to-r from-pink-100 to-rose-100',
      bannerImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      color: 'bg-pink-400',
      lightColor: 'bg-pink-50',
      cards: [
        {
          icon: BookOpen,
          title: 'Materiale',
          description: 'lecții, eseuri, figuri de stil',
          color: 'bg-pink-500'
        },
        {
          icon: PenTool,
          title: 'Probleme Antrenament',
          description: 'exerciții de gramatică, vocabular, texte',
          color: 'bg-pink-600'
        },
        {
          icon: FileText,
          title: 'Subiecte',
          description: 'subiecte oficiale BAC + bareme',
          color: 'bg-pink-700'
        }
      ]
    },
    matematica: {
      title: 'Matematică',
      subtitle: 'Stăpânește logica. Construiește performanță.',
      bannerBg: 'bg-gradient-to-r from-blue-100 to-indigo-100',
      bannerImage: 'https://images.pexels.com/photos/6256/mathematics-computation-math-blackboard.jpg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      cards: [
        {
          icon: BookOpen,
          title: 'Materiale',
          description: 'teorie BAC, formule esențiale',
          color: 'bg-blue-500'
        },
        {
          icon: PenTool,
          title: 'Probleme Antrenament',
          description: 'exerciții pe capitole, niveluri diferite',
          color: 'bg-blue-600'
        },
        {
          icon: FileText,
          title: 'Subiecte',
          description: 'subiecte oficiale BAC + simulări',
          color: 'bg-blue-700'
        }
      ]
    },
    fizica: {
      title: 'Fizică',
      subtitle: 'Înțelege legile universului. Aplică-le cu încredere.',
      bannerBg: 'bg-gradient-to-r from-yellow-100 to-orange-100',
      bannerImage: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-50',
      cards: [
        {
          icon: BookOpen,
          title: 'Materiale',
          description: 'legi fizice, formule, teorie clasele XI–XII',
          color: 'bg-yellow-500'
        },
        {
          icon: PenTool,
          title: 'Probleme Antrenament',
          description: 'exerciții pe teme: mecanică, electricitate etc.',
          color: 'bg-yellow-600'
        },
        {
          icon: FileText,
          title: 'Subiecte',
          description: 'modele de subiecte BAC + soluții',
          color: 'bg-yellow-700'
        }
      ]
    },
    geografie: {
      title: 'Geografie',
      subtitle: 'Cunoaște lumea. Stăpânește harta.',
      bannerBg: 'bg-gradient-to-r from-green-100 to-emerald-100',
      bannerImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      cards: [
        {
          icon: BookOpen,
          title: 'Materiale',
          description: 'geografie fizică, umană, termeni cheie',
          color: 'bg-green-500'
        },
        {
          icon: PenTool,
          title: 'Probleme Antrenament',
          description: 'exerciții pe hărți, climat, resurse',
          color: 'bg-green-600'
        },
        {
          icon: FileText,
          title: 'Subiecte',
          description: 'subiecte BAC organizate pe ani',
          color: 'bg-green-700'
        }
      ]
    }
  };

  const data = subjectData[subject];

  const handleCardClick = (cardTitle: string) => {
    console.log(`Navigating to ${cardTitle} for ${subject}`);
    // Handle navigation to specific section
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header with back button */}
      <div className="bg-[#e8f0fe] py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#1e3a8a] hover:text-[#1a365d] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Înapoi la materii</span>
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className={`${data.bannerBg} relative overflow-hidden`}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${data.bannerImage})` }}
        />
        <div className="relative max-w-4xl mx-auto py-20 px-6 text-center">
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-700 italic font-medium">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className={`${data.lightColor} rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100`}
                onClick={() => handleCardClick(card.title)}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className={`${card.color} p-6 rounded-full shadow-lg`}>
                    <card.icon size={40} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-lg hover:bg-[#333] transition-colors duration-200 font-medium text-lg">
                    Explorează
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;