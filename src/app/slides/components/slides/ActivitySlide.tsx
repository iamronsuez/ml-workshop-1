import React from 'react';
import { ActivitySlide } from '../../types/slide.types';

interface ActivitySlideComponentProps {
  slide: ActivitySlide;
}

const ActivitySlideComponent: React.FC<ActivitySlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Scenario */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">📋 Escenario</h3>
        <p className="text-lg text-gray-700">{slide.content.scenario}</p>
      </div>

      {/* Roles */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">👥 Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.content.roles.map((role, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105"
            >
              <h4 className="text-lg font-bold text-purple-600 mb-2">{role.role}</h4>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Preocupación:</span> {role.concern}
                </p>
                {role.preference && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Preferencia:</span> {role.preference}
                  </p>
                )}
                {role.decision_range && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Rango de decisión:</span> {role.decision_range}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">❓ {slide.content.question}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.content.options.map((option, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-orange-50 cursor-pointer"
            >
              <div className="flex items-center">
                <span className="text-2xl font-bold text-orange-500 mr-3">{idx + 1}</span>
                <p className="text-gray-700">{option}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Moment */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">💡 Momento de Enseñanza</h3>
        <p className="text-lg text-gray-700">{slide.content.teaching_moment}</p>
      </div>
    </div>
  );
};

export default ActivitySlideComponent;