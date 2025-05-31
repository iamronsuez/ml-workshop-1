"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
	ChevronLeft,
	ChevronRight,
	Play,
	Pause,
	RotateCcw,
	Maximize2,
	Eye,
	EyeOff,
} from "lucide-react";
import { slidesData } from "./data/slides";
import type { Slide } from "./types/slide.types";
import SlideRenderer from "./components/SlideRenderer";

const MLPresentation = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(false);
	const [timer, setTimer] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showNotes, setShowNotes] = useState(false);

	const slides: Slide[] = slidesData as Slide[];

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			switch (e.key) {
				case "ArrowLeft":
					prevSlide();
					break;
				case "ArrowRight":
					nextSlide();
					break;
				case " ":
					e.preventDefault();
					toggleAutoPlay();
					break;
				case "f":
					toggleFullscreen();
					break;
				case "n":
					setShowNotes(!showNotes);
					break;
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [showNotes]);

	// Auto-play timer
	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isAutoPlay) {
			interval = setInterval(() => {
				setTimer((prev) => prev + 1);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isAutoPlay]);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		setTimer(0);
	}, [slides.length]);

	const prevSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		setTimer(0);
	}, [slides.length]);

	const goToSlide = useCallback((index: number) => {
		setCurrentSlide(index);
		setTimer(0);
	}, []);

	const toggleAutoPlay = useCallback(() => {
		setIsAutoPlay(!isAutoPlay);
		setTimer(0);
	}, [isAutoPlay]);

	const resetTimer = useCallback(() => {
		setTimer(0);
	}, []);

	const toggleFullscreen = useCallback(() => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setIsFullscreen(true);
		} else {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	}, []);

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	const getCurrentSlide = () => slides[currentSlide];

	return (
		<div
			className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${isFullscreen ? "p-0" : ""}`}
		>
			{/* Header Controls */}
			<div
				className={`bg-white/95 backdrop-blur-sm p-2 md:p-4 shadow-lg ${isFullscreen ? "hidden" : ""}`}
			>
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
					<div className="flex items-center space-x-2 md:space-x-4">
						<h1 className="text-sm md:text-xl font-bold text-gray-800">
							ML sin Código
						</h1>
						<span className="text-xs md:text-sm text-gray-600">
							{currentSlide + 1} / {slides.length}
						</span>
					</div>

					<div className="flex items-center space-x-2 md:space-x-4">
						<div className="flex items-center space-x-1 md:space-x-2 bg-gray-100 rounded-lg p-1 md:p-2">
							<span className="text-xs md:text-sm text-gray-600 hidden md:inline">
								Timer:
							</span>
							<span className="font-mono text-xs md:text-sm font-bold">
								{formatTime(timer)}
							</span>
							<button
								onClick={resetTimer}
								className="p-1 hover:bg-gray-200 rounded"
							>
								<RotateCcw size={14} className="md:w-4 md:h-4" />
							</button>
						</div>

						<button
							onClick={toggleAutoPlay}
							className={`p-1 md:p-2 rounded-lg ${isAutoPlay ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}
							title="Spacebar to toggle"
						>
							{isAutoPlay ? (
								<Pause size={16} className="md:w-5 md:h-5" />
							) : (
								<Play size={16} className="md:w-5 md:h-5" />
							)}
						</button>

						<button
							onClick={() => setShowNotes(!showNotes)}
							className={`p-1 md:p-2 rounded-lg ${showNotes ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
							title="Press 'n' to toggle notes"
						>
							{showNotes ? (
								<Eye size={16} className="md:w-5 md:h-5" />
							) : (
								<EyeOff size={16} className="md:w-5 md:h-5" />
							)}
						</button>

						<button
							onClick={toggleFullscreen}
							className="p-1 md:p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
							title="Press 'f' for fullscreen"
						>
							<Maximize2 size={16} className="md:w-5 md:h-5" />
						</button>

						<div className="bg-purple-100 px-2 md:px-3 py-1 rounded-lg">
							<span className="text-purple-700 font-medium text-xs md:text-sm">
								{getCurrentSlide().duration}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div
				className={`max-w-7xl mx-auto p-2 md:p-8 ${isFullscreen ? "h-screen flex items-center" : ""}`}
			>
				<div
					className={`bg-white rounded-xl md:rounded-3xl shadow-2xl ${isFullscreen ? "h-full" : "min-h-[600px]"} p-4 md:p-8 overflow-auto`}
				>
					{/* Slide Header */}
					<div className="text-center mb-4 md:mb-8">
						<h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
							{getCurrentSlide().title}
						</h1>
						<p className="text-lg md:text-xl text-gray-600">
							{getCurrentSlide().subtitle}
						</p>
					</div>

					{/* Slide Content */}
					<div className="mb-4 md:mb-8">
						<SlideRenderer slide={getCurrentSlide()} />
					</div>

					{/* Speaker Notes */}
					{showNotes && (
						<div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-4">
							<h4 className="font-bold text-blue-800 mb-2">
								📝 Notas del Presentador:
							</h4>
							<p className="text-blue-700 text-sm">{getCurrentSlide().notes}</p>
						</div>
					)}
				</div>
			</div>

			{/* Navigation */}
			<div
				className={`bg-white/95 backdrop-blur-sm p-2 md:p-4 ${isFullscreen ? "absolute bottom-0 left-0 right-0" : ""}`}
			>
				<div className="max-w-7xl mx-auto">
					{/* Progress Bar */}
					<div className="w-full bg-gray-200 rounded-full h-1 md:h-2 mb-2 md:mb-4">
						<div
							className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
							style={{
								width: `${((currentSlide + 1) / slides.length) * 100}%`,
							}}
						/>
					</div>

					{/* Navigation Controls */}
					<div className="flex items-center justify-between">
						<button
							onClick={prevSlide}
							disabled={currentSlide === 0}
							className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-sm md:text-base"
						>
							<ChevronLeft size={16} className="md:w-5 md:h-5" />
							<span className="hidden md:inline">Anterior</span>
						</button>

						{/* Slide Indicators */}
						<div className="flex space-x-1 md:space-x-2 overflow-x-auto max-w-xs md:max-w-md">
							{slides.map((slide, index) => (
								<button
									key={slide.id}
									onClick={() => goToSlide(index)}
									className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
										currentSlide === index
											? "bg-purple-500 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									title={`Slide ${index + 1}: ${slide.title}`}
								/>
							))}
						</div>

						<button
							onClick={nextSlide}
							disabled={currentSlide === slides.length - 1}
							className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm md:text-base"
						>
							<span className="hidden md:inline">Siguiente</span>
							<ChevronRight size={16} className="md:w-5 md:h-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Keyboard shortcuts hint */}
			{!isFullscreen && (
				<div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded-lg opacity-50 hover:opacity-100 transition-opacity">
					<div>← → Navigate</div>
					<div>Space: Play/Pause</div>
					<div>F: Fullscreen</div>
					<div>N: Toggle Notes</div>
				</div>
			)}
		</div>
	);
};

export default MLPresentation;
