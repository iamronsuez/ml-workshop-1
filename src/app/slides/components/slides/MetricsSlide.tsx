import React from 'react';
import { MetricsSlide } from '../../types/slide.types';

interface MetricsSlideComponentProps {
  slide: MetricsSlide;
}

const MetricsSlideComponent: React.FC<MetricsSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Key Message */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {slide.content.key_message}
        </h2>
      </div>

      {/* Essential Metrics */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">📊 Métricas Esenciales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slide.content.essential_metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105"
            >
              <h4 className="text-lg font-bold text-indigo-700 mb-3">{metric.name}</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-600 mb-1">En términos simples:</p>
                  <p className="text-gray-800">{metric.simple}</p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-indigo-700 mb-1">Como analogía:</p>
                  <p className="text-indigo-900">{metric.analogy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Rules */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-6 text-center">
          🎯 Reglas Prácticas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {slide.content.practical_rules.map((rule, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-start"
            >
              <span className="text-2xl font-bold text-teal-500 mr-3">{idx + 1}</span>
              <p className="text-gray-700">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsSlideComponent;