import React from 'react';
import { CaseIntroSlide } from '../../types/slide.types';

interface CaseIntroSlideComponentProps {
  slide: CaseIntroSlide;
}

const CaseIntroSlideComponent: React.FC<CaseIntroSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
          {slide.content.problem}
        </h3>
      </div>
      
      {slide.content.critical_facts && (
        <div className="bg-yellow-50 p-6 rounded-2xl">
          <h4 className="text-lg font-bold text-yellow-800 mb-3">⚠️ Datos Críticos:</h4>
          <ul className="space-y-2">
            {slide.content.critical_facts.map((fact, idx) => (
              <li key={idx} className="text-yellow-700 flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slide.content.scenarios.map((scenario, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-colors">
            <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{scenario.scenario}</h4>
            <p className="text-gray-600">{scenario.result}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-green-600 mb-4">💡 La Solución con IA:</h3>
        <p className="text-lg text-green-700 mb-4">{slide.content.solution}</p>
        {slide.content.impact && (
          <p className="text-green-600 font-medium">{slide.content.impact}</p>
        )}
      </div>
    </div>
  );
};

export default CaseIntroSlideComponent;