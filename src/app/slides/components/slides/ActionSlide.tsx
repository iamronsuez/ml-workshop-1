import React from 'react';
import { ActionSlide } from '../../types/slide.types';

interface ActionSlideComponentProps {
  slide: ActionSlide;
}

const ActionSlideComponent: React.FC<ActionSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Immediate Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
          🚀 Acciones Inmediatas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide.content.immediate_actions.map((action, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="mb-3">
                <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {action.time}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{action.action}</h4>
              <p className="text-gray-600">{action.task}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 text-center">
          📚 Recursos Disponibles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.content.resources.map((resource, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-teal-600 font-bold">{resource.type.charAt(0).toUpperCase()}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold text-gray-800 mb-1">{resource.resource}</h5>
                  <p className="text-sm text-gray-600">{resource.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 md:p-10 rounded-2xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
          🎯 Desafío
        </h3>
        <p className="text-lg md:text-xl font-semibold text-gray-800 max-w-3xl mx-auto">
          {slide.content.challenge}
        </p>
      </div>
    </div>
  );
};

export default ActionSlideComponent;