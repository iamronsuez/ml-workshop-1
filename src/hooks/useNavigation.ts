"use client"
import { useEffect, useCallback, useState } from "react";
// Hook personalizado para navegación entre slides
export const useSlideNavigation = (totalSlides: number, onSlideChange = (slide: number) => {}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timer, setTimer] = useState(0);
  
    const nextSlide = useCallback(() => {
      setCurrentSlide(prev => {
        const newSlide = (prev + 1) % totalSlides;
        onSlideChange(newSlide);
        return newSlide;
      });
      setTimer(0);
    }, [totalSlides, onSlideChange]);
  
    const prevSlide = useCallback(() => {
      setCurrentSlide(prev => {
        const newSlide = (prev - 1 + totalSlides) % totalSlides;
        onSlideChange(newSlide);
        return newSlide;
      });
      setTimer(0);
    }, [totalSlides, onSlideChange]);
  
    const goToSlide = useCallback((index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
        setTimer(0);
        onSlideChange(index);
      }
    }, [totalSlides, onSlideChange]);
  
    const reset = useCallback(() => {
      setCurrentSlide(0);
      setTimer(0);
      onSlideChange(0);
    }, [onSlideChange]);
  
    // Métodos de navegación con teclado
    useEffect(() => {
      const handleKeyPress = (e: any) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Home') goToSlide(0);
        if (e.key === 'End') goToSlide(totalSlides - 1);
      };
  
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [nextSlide, prevSlide, goToSlide, totalSlides]);
  
    return {
      currentSlide,
      timer,
      setTimer,
      nextSlide,
      prevSlide,
      goToSlide,
      reset,
      isFirst: currentSlide === 0,
      isLast: currentSlide === totalSlides - 1,
      progress: ((currentSlide + 1) / totalSlides) * 100
    };
  };
  