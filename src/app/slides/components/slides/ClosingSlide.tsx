import React from 'react';
import { ClosingSlide } from '../../types/slide.types';

interface ClosingSlideComponentProps {
  slide: ClosingSlide;
}

const ClosingSlideComponent: React.FC<ClosingSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* What They Learned */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 text-center">
          ✅ Lo que Aprendieron Hoy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {slide.content.what_they_learned.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-start"
            >
              <span className="text-purple-500 text-2xl mr-3">✓</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Potential */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 text-center">
          💫 Potencial de Impacto
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(slide.content.impact_potential).map(([key, value], idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105 text-center"
            >
              <h4 className="text-lg font-bold text-teal-600 mb-2">{key}</h4>
              <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Challenge */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 md:p-10 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">
          🎯 Desafío Final
        </h3>
        <p className="text-lg md:text-xl font-semibold text-gray-800 text-center max-w-3xl mx-auto">
          {slide.content.final_challenge}
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-10 rounded-2xl text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {slide.content.call_to_action}
        </h3>
      </div>

      {/* Power Phrase */}
      <div className="text-center p-8 md:p-12">
        <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          {slide.content.power_phrase}
        </p>
      </div>
    </div>
  );
};

export default ClosingSlideComponent;