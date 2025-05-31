import React from 'react';
import { TitleSlide } from '../../types/slide.types';

interface TitleSlideComponentProps {
  slide: TitleSlide;
}

const TitleSlideComponent: React.FC<TitleSlideComponentProps> = ({ slide }) => {
  return (
    <div className="text-center space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">{slide.subtitle}</p>
      </div>
      
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">{slide.content.hook}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide.content.examples.map((example, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              {example}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl">
        <p className="text-lg md:text-xl font-semibold text-purple-700">
          {slide.content.power_phrase}
        </p>
      </div>
    </div>
  );
};

export default TitleSlideComponent;