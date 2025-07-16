import React from 'react';
import { BookOpen, Calculator, Atom, MapPin } from 'lucide-react';
import SubjectCard from './SubjectCard';

const SubjectGrid: React.FC = () => {
  const subjects = [
    {
      title: 'Limba și literatura română',
      icon: BookOpen,
      color: 'bg-pink-400',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Matematică',
      icon: Calculator,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Fizică',
      icon: Atom,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Geografie',
      icon: MapPin,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  const handleSubjectClick = (subject: string) => {
    console.log(`Navigating to ${subject}`);
    // Handle navigation logic here
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Alege materia</h2>
          <p className="text-lg text-gray-600 italic">
            Organizează-ți învățarea pe discipline și vezi progresul tău.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              title={subject.title}
              icon={subject.icon}
              color={subject.color}
              bgColor={subject.bgColor}
              onClick={() => handleSubjectClick(subject.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;