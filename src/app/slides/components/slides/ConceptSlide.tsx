import React from 'react';
import { ConceptSlide } from '../../types/slide.types';

interface ConceptSlideComponentProps {
  slide: ConceptSlide;
}

const ConceptSlideComponent: React.FC<ConceptSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
          {slide.content.simple_definition}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slide.content.analogies.map((analogy, idx) => (
          <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105">
            <h4 className="text-lg md:text-xl font-bold text-purple-600 mb-3">{analogy.title}</h4>
            <p className="text-purple-700">{analogy.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-2xl">
        <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-4">Ejemplos que ya conoces:</h3>
        <div className="flex flex-wrap gap-3">
          {slide.content.examples_they_know.map((example, idx) => (
            <span key={idx} className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow">
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConceptSlideComponent;