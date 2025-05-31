import React from 'react';
import { Slide } from '../types/slide.types';
import TitleSlideComponent from './slides/TitleSlide';
import ComparisonSlideComponent from './slides/ComparisonSlide';
import ConceptSlideComponent from './slides/ConceptSlide';
import CaseIntroSlideComponent from './slides/CaseIntroSlide';
import DemoSlideComponent from './slides/DemoSlide';
import ResultsSlideComponent from './slides/ResultsSlide';
import ActivitySlideComponent from './slides/ActivitySlide';
import MetricsSlideComponent from './slides/MetricsSlide';
import InspirationSlideComponent from './slides/InspirationSlide';
import ActionSlideComponent from './slides/ActionSlide';
import ClosingSlideComponent from './slides/ClosingSlide';

interface SlideRendererProps {
  slide: Slide;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlideComponent slide={slide} />;
    case 'comparison':
      return <ComparisonSlideComponent slide={slide} />;
    case 'concept':
      return <ConceptSlideComponent slide={slide} />;
    case 'case_intro':
      return <CaseIntroSlideComponent slide={slide} />;
    case 'demo':
      return <DemoSlideComponent slide={slide} />;
    case 'results':
      return <ResultsSlideComponent slide={slide} />;
    case 'activity':
      return <ActivitySlideComponent slide={slide} />;
    case 'metrics':
      return <MetricsSlideComponent slide={slide} />;
    case 'inspiration':
      return <InspirationSlideComponent slide={slide} />;
    case 'action':
      return <ActionSlideComponent slide={slide} />;
    case 'closing':
      return <ClosingSlideComponent slide={slide} />;
    default:
      return (
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">{slide.title}</h1>
          <p className="text-xl text-gray-600">{slide.subtitle}</p>
        </div>
      );
  }
};

export default SlideRenderer;