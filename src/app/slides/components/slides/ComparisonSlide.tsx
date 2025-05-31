import React from 'react';
import { ComparisonSlide } from '../../types/slide.types';

interface ComparisonSlideComponentProps {
  slide: ComparisonSlide;
}

const ComparisonSlideComponent: React.FC<ComparisonSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-6 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">❌ Mitos</h3>
          <div className="space-y-4">
            {slide.content.myths.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105">
                <p className="text-red-700 font-medium">{item.myth}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">✅ Realidad</h3>
          <div className="space-y-4">
            {slide.content.myths.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105">
                <p className="text-green-700 font-medium">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-2xl">
        <p className="text-xl md:text-2xl font-bold text-orange-600">
          {slide.content.key_message}
        </p>
      </div>
    </div>
  );
};

export default ComparisonSlideComponent;