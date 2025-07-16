import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ title, icon: Icon, color, bgColor, onClick }) => {
  return (
    <div 
      className={`${bgColor} rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`${color} p-4 rounded-full`}>
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold text-[#1a1a1a]">{title}</h3>
        <button className="bg-[#1a1a1a] text-white px-6 py-2 rounded-lg hover:bg-[#333] transition-colors duration-200">
          Intră
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;