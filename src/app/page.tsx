"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, DollarSign, ShoppingCart, ArrowRight, Clock, Users, Target, Sparkles } from 'lucide-react';

export default function Home() {
  const labs = [
    {
      id: 'lab-1',
      href: '/lab-1',
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Predicción Energética',
      subtitle: 'Cooperativa Eléctrica',
      description: 'Crea un modelo que predice consumo energético para evitar apagones y optimizar recursos',
      duration: '20 min',
      difficulty: 'Intermedio',
      metrics: '54% precisión',
      impact: 'Ahorra $11M anuales',
      color: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200 hover:border-yellow-400',
      tags: ['Time Series', 'Forecasting', 'Impacto Social']
    },
    {
      id: 'lab-2',
      href: '/lab-2',
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: 'Predicción de Préstamos',
      subtitle: 'Análisis de Riesgo Crediticio',
      description: 'Predice si una persona pagará su préstamo usando analogías con consumo de energía',
      duration: '20 min',
      difficulty: 'Principiante',
      metrics: '83% precisión',
      impact: 'Reduce pérdidas 40%',
      color: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200 hover:border-green-400',
      tags: ['Classification', 'Risk Analysis', 'Finanzas']
    },
    {
      id: 'lab-3',
      href: '/lab-3',
      icon: <ShoppingCart className="w-12 h-12 text-purple-500" />,
      title: 'Banco de Alimentos',
      subtitle: 'Predicción de Demanda',
      description: 'Reduce desperdicio de alimentos y garantiza disponibilidad para familias necesitadas',
      duration: '20 min',
      difficulty: 'Principiante',
      metrics: '85% precisión',
      impact: '600 familias extra',
      color: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200 hover:border-purple-400',
      tags: ['Demand Forecasting', 'Social Impact', 'Sustentabilidad']
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '3', label: 'Labs Prácticos' },
    { icon: <Clock className="w-6 h-6" />, value: '105', label: 'Minutos Total' },
    { icon: <Target className="w-6 h-6" />, value: '0', label: 'Código Requerido' },
    { icon: <Sparkles className="w-6 h-6" />, value: '100%', label: 'Hands-on' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20" />
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
              🚀 Machine Learning Sin Código
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Aprende a crear IA con impacto social real usando Amazon SageMaker Canvas
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <div className="text-yellow-400">{stat.icon}</div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Labs Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Elige tu Aventura de IA</h2>
          <p className="text-gray-300">Cada lab es independiente. Comienza con el que más te interese.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <Link key={lab.id} href={lab.href} className="block group">
              <div className={`relative bg-gradient-to-br ${lab.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${lab.borderColor}`}>
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    {lab.icon}
                    <span className="text-sm bg-white/80 px-3 py-1 rounded-full font-medium">
                      {lab.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{lab.title}</h3>
                  <p className="text-gray-600 font-medium">{lab.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 line-clamp-2">
                  {lab.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Precisión</p>
                    <p className="font-bold text-gray-800">{lab.metrics}</p>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Impacto</p>
                    <p className="font-bold text-gray-800">{lab.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {lab.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded-full text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{lab.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800 group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Comenzar</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para cambiar el mundo con IA? 🌟
            </h3>
            <p className="text-gray-300 mb-6">
              No necesitas experiencia previa. Solo curiosidad y ganas de aprender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lab-1" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
                Empezar con Lab 1
              </Link>
              <a href="https://aws.amazon.com/sagemaker/canvas/" target="_blank" rel="noopener noreferrer" className="bg-white/20 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/30 transition-all">
                Más sobre Canvas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}