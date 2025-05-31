import React from 'react';
import { InspirationSlide } from '../../types/slide.types';

interface InspirationSlideComponentProps {
  slide: InspirationSlide;
}

const InspirationSlideComponent: React.FC<InspirationSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Real Examples */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🌟 Historias Reales de Éxito
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide.content.real_examples.map((example, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold text-purple-700">{example.student}</h4>
                <p className="text-lg font-semibold text-gray-700 mt-1">{example.project}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-sm font-semibold text-pink-600 mb-2">Impacto:</p>
                <p className="text-gray-800">{example.impact}</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                <p className="italic text-gray-700">
                  <span className="text-2xl text-purple-500">"</span>
                  {example.quote}
                  <span className="text-2xl text-purple-500">"</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 md:p-10 rounded-2xl text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
            💡 Insight Clave
          </h3>
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            {slide.content.key_insight}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InspirationSlideComponent;