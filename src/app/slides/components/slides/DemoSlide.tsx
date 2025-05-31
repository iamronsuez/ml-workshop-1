import React from 'react';
import { DemoSlide } from '../../types/slide.types';

interface DemoSlideComponentProps {
  slide: DemoSlide;
}

const DemoSlideComponent: React.FC<DemoSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slide.content.steps.map((step, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-indigo-800">{step.step}</h4>
                <p className="text-indigo-600">{step.time}</p>
              </div>
            </div>
            <p className="text-indigo-700">{step.detail}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-amber-600 mb-4">
          🤔 Pregunta para la Audiencia:
        </h3>
        <p className="text-lg text-amber-700 mb-4">{slide.content.question_for_audience}</p>
        <p className="text-amber-600 font-medium">{slide.content.teaching_moment}</p>
      </div>
    </div>
  );
};

export default DemoSlideComponent;