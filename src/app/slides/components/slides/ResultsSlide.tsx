import React from 'react';
import { ResultsSlide } from '../../types/slide.types';

interface ResultsSlideComponentProps {
  slide: ResultsSlide;
}

const ResultsSlideComponent: React.FC<ResultsSlideComponentProps> = ({ slide }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Main Metric Display */}
      {slide.content.main_metric && (
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">
            {slide.content.main_metric.name}
          </h3>
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {slide.content.main_metric.value}
          </div>
          <p className="text-lg text-gray-700">{slide.content.main_metric.interpretation}</p>
        </div>
      )}

      {/* Metrics Grid */}
      {slide.content.metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.content.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-gray-800">{metric.metric}</h4>
                <span className="text-2xl font-bold text-blue-600">{metric.grade}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <p className="text-sm text-gray-600">{metric.meaning}</p>
            </div>
          ))}
        </div>
      )}

      {/* Comparison Section */}
      {slide.content.comparison && (
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">Comparación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(slide.content.comparison).map(([key, value], idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg">
                <span className="font-semibold text-gray-700">{key}:</span>
                <span className="ml-2 text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Is It Good Section */}
      {slide.content.is_it_good && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">
            {slide.content.is_it_good.question}
          </h3>
          <p className="text-lg font-semibold text-orange-700 mb-4">
            {slide.content.is_it_good.answer}
          </p>
          <div className="space-y-2">
            {slide.content.is_it_good.reasons.map((reason, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reality Check */}
      {slide.content.reality_check && (
        <div className="text-center bg-red-50 p-6 rounded-2xl">
          <p className="text-lg md:text-xl font-semibold text-red-700">
            ⚠️ {slide.content.reality_check}
          </p>
        </div>
      )}

      {/* Price Impact */}
      {slide.content.price_impact && (
        <div className="text-center bg-purple-50 p-6 rounded-2xl">
          <p className="text-lg md:text-xl font-semibold text-purple-700">
            💰 {slide.content.price_impact}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultsSlideComponent;