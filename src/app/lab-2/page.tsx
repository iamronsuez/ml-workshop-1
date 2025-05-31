"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Zap, TrendingUp, AlertCircle, CheckCircle, DollarSign, Home, BarChart3, Target, Users, Lightbulb, Battery, Activity, Clock, Play, Pause } from 'lucide-react';

const PrestamosPredictorIA = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedRisk, setSelectedRisk] = useState(null);
  const [animatedMetric, setAnimatedMetric] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [userProfile, setUserProfile] = useState({
    income: 60000,
    loanAmount: 12000,
    employment: 'stable'
  });

  const sections = [
    {
      id: 'intro',
      title: '🎯 ¿Qué Acabamos de Crear?',
      duration: '5 min',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      content: 'intro'
    },
    {
      id: 'analogy',
      title: '💡 La Analogía con la Luz',
      duration: '3 min',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      content: 'analogy'
    },
    {
      id: 'metrics',
      title: '📊 Los Números que Importan',
      duration: '5 min',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      content: 'metrics'
    },
    {
      id: 'factors',
      title: '🔍 Los "Detectores de Riesgo"',
      duration: '4 min',
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      content: 'factors'
    },
    {
      id: 'matrix',
      title: '🎯 La Matriz de Decisiones',
      duration: '6 min',
      icon: <Target className="w-8 h-8 text-red-500" />,
      content: 'matrix'
    },
    {
      id: 'simulator',
      title: '🎮 Simulador Interactivo',
      duration: '5 min',
      icon: <Battery className="w-8 h-8 text-green-500" />,
      content: 'simulator'
    },
    {
      id: 'impact',
      title: '💰 El Impacto Real',
      duration: '5 min',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      content: 'impact'
    }
  ];

  useEffect(() => {
    const animTimer = setTimeout(() => {
      setAnimatedMetric(83);
    }, 500);
    return () => clearTimeout(animTimer);
  }, [currentSection]);

  useEffect(() => {
    let interval = undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCompletedSections(prev => new Set([...prev, currentSection]));
      setCurrentSection(prev => prev + 1);
      setTimer(0);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setTimer(0);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentSection = () => sections[currentSection];

  const calculateRisk = () => {
    const ratio = userProfile.loanAmount / userProfile.income;
    const base = userProfile.employment === 'stable' ? 60 : 40;
    return Math.round(Math.max(0, Math.min(100, base - (ratio * 100))));
  };

  const renderContent = () => {
    const section = sections[currentSection];

    switch (section.content) {
      case 'intro':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Creamos un Modelo de IA que Predice Préstamos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                ¡Sin escribir una sola línea de código!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-blue-600">🎯 Lo que hace</h3>
                <p className="text-gray-700">
                  Predice si una persona pagará o no su préstamo con un <strong>83% de precisión</strong>
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-green-600">⏱️ Tiempo</h3>
                <p className="text-gray-700">
                  Lo que normalmente toma <strong>semanas</strong>, lo hicimos en <strong>20 minutos</strong>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">🤔 ¿Por qué es importante?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="font-medium">Acceso Justo</p>
                  <p className="text-sm text-gray-600">Decisiones objetivas basadas en datos</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="font-medium">Ahorro Millonario</p>
                  <p className="text-sm text-gray-600">Reduce pérdidas por impagos</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <p className="font-medium">Decisiones Rápidas</p>
                  <p className="text-sm text-gray-600">De días a segundos</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">💡 Piensa en tu Consumo de Luz</h2>
              <p className="text-lg text-gray-600">
                Predecir préstamos es como predecir si alguien pagará su cuenta de luz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
                  <h3 className="text-xl font-bold text-orange-600">Consumo de Luz</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚡</span>
                    <span>Si usas mucha energía → cuenta alta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚡</span>
                    <span>Si tienes buenos ingresos → pagas sin problema</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚡</span>
                    <span>Si te cortan la luz antes → riesgo futuro</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 mr-3 text-blue-500" />
                  <h3 className="text-xl font-bold text-purple-600">Préstamos</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">💰</span>
                    <span>Si pides mucho dinero → mayor riesgo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">💰</span>
                    <span>Si tienes buenos ingresos → pagas sin problema</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">💰</span>
                    <span>Si no pagaste antes → riesgo futuro</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-green-600">💡 La IA es como un medidor inteligente</h3>
              <p className="text-gray-700 mb-4">
                Así como un medidor inteligente de luz puede predecir tu consumo basándose en patrones:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <Activity className="w-6 h-6 mb-2 text-green-500" />
                  <p className="font-medium">Analiza Patrones</p>
                  <p className="text-sm text-gray-600">Historial de pagos</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Battery className="w-6 h-6 mb-2 text-yellow-500" />
                  <p className="font-medium">Mide Capacidad</p>
                  <p className="text-sm text-gray-600">Ingresos vs gastos</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <AlertCircle className="w-6 h-6 mb-2 text-red-500" />
                  <p className="font-medium">Detecta Riesgos</p>
                  <p className="text-sm text-gray-600">Señales de alerta</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">📊 Los Números de Nuestro Modelo</h2>
              <p className="text-lg text-gray-600">
                Como las calificaciones de la universidad
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Precisión Global</h3>
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-green-600">{animatedMetric}%</span>
                  </div>
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#10b981"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - animatedMetric / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-gray-700">
                  De cada 100 predicciones, <strong>83 son correctas</strong>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-purple-600">📊 Comparación con la vida real</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>🎯 Nuestro Modelo</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-2">
                        <div className="bg-purple-500 h-3 rounded-full" style={{width: '83%'}}></div>
                      </div>
                      <span className="font-bold">83%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>🎲 Adivinar al azar</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-2">
                        <div className="bg-gray-400 h-3 rounded-full" style={{width: '33%'}}></div>
                      </div>
                      <span className="font-bold">33%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>👨‍💼 Experto humano</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-2">
                        <div className="bg-blue-400 h-3 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="font-bold">72%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>🏦 Bancos grandes</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-2">
                        <div className="bg-green-400 h-3 rounded-full" style={{width: '82%'}}></div>
                      </div>
                      <span className="font-bold">82%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-orange-600">💡 ¿Qué significa en la práctica?</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">Como el medidor de luz:</p>
                    <p className="text-sm text-gray-600">
                      Si predice consumo de 100 kWh, el real estará entre 85-115 kWh
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">En préstamos:</p>
                    <p className="text-sm text-gray-600">
                      Si predice pagará, hay 83% de probabilidad de que sea correcto
                    </p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-medium text-orange-700">
                      ¡Es como sacar 8.3/10 en un examen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'factors':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🔍 Los "Detectores de Riesgo" Más Importantes</h2>
              <p className="text-lg text-gray-600">
                Como los factores que afectan tu cuenta de luz
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Tasa de Interés (21.9%)</h3>
                      <p className="text-gray-600">El "precio" del préstamo</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-red-500">💳</span>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium mb-2">💡 Analogía con la luz:</p>
                  <p className="text-gray-700">
                    Como cuando suben las tarifas eléctricas → más gente se atrasa en pagos
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Ingresos Anuales (19.1%)</h3>
                      <p className="text-gray-600">La capacidad de pago</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-green-500">💰</span>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium mb-2">💡 Analogía con la luz:</p>
                  <p className="text-gray-700">
                    Como tener un buen sueldo → puedes pagar cualquier cuenta de luz sin problema
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Plazo del Préstamo (13.4%)</h3>
                      <p className="text-gray-600">36 o 60 meses</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-blue-500">📅</span>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium mb-2">💡 Analogía con la luz:</p>
                  <p className="text-gray-700">
                    Como predecir tu consumo de luz para 1 mes vs 5 años → más tiempo = más incertidumbre
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600">🎯 El otro 45.6% incluye:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <Activity className="w-6 h-6 mb-2 text-orange-500" />
                  <p className="font-medium">Historial crediticio</p>
                  <p className="text-sm text-gray-600">Como tu historial de pagos de luz</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Home className="w-6 h-6 mb-2 text-blue-500" />
                  <p className="font-medium">Tipo de vivienda</p>
                  <p className="text-sm text-gray-600">Propia, alquiler, etc.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Users className="w-6 h-6 mb-2 text-purple-500" />
                  <p className="font-medium">Estabilidad laboral</p>
                  <p className="text-sm text-gray-600">Años en el trabajo actual</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 mb-2 text-green-500" />
                  <p className="font-medium">Tendencias económicas</p>
                  <p className="text-sm text-gray-600">Situación del país</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'matrix':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🎯 La Matriz de Decisiones</h2>
              <p className="text-lg text-gray-600">
                El "reporte de notas" del modelo
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-6">
              <h3 className="text-xl font-bold mb-4 text-purple-600">📊 ¿Qué nos dice la matriz?</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Predicción</th>
                      <th className="p-3 text-center">Pagará ✅</th>
                      <th className="p-3 text-center">No Pagará ❌</th>
                      <th className="p-3 text-center">En Proceso ⏳</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Dijo "Pagará"</td>
                      <td className="p-3 text-center bg-green-50 font-bold text-green-600">6,579 ✅</td>
                      <td className="p-3 text-center bg-red-50 text-red-600">1,114</td>
                      <td className="p-3 text-center bg-yellow-50 text-yellow-600">218</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Dijo "No Pagará"</td>
                      <td className="p-3 text-center bg-red-50 text-red-600">10</td>
                      <td className="p-3 text-center bg-green-50 font-bold text-green-600">9 ✅</td>
                      <td className="p-3 text-center bg-yellow-50 text-yellow-600">5</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Dijo "En Proceso"</td>
                      <td className="p-3 text-center bg-red-50 text-red-600">1</td>
                      <td className="p-3 text-center bg-red-50 text-red-600">3</td>
                      <td className="p-3 text-center bg-green-50 font-bold text-green-600">5 ✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Lo Bueno</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">6,579 casos perfectos</p>
                      <p className="text-sm text-gray-600">Predijo bien que pagarían</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Precisión del 83.16%</p>
                      <p className="text-sm text-gray-600">Cuando dice SÍ, casi siempre acierta</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-orange-600">⚠️ Para Mejorar</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 text-orange-500 mt-0.5" />
                    <div>
                      <p className="font-medium">1,114 casos optimistas</p>
                      <p className="text-sm text-gray-600">Pensó que pagarían pero no lo hicieron</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 text-orange-500 mt-0.5" />
                    <div>
                      <p className="font-medium">El modelo es "optimista"</p>
                      <p className="text-sm text-gray-600">Prefiere confiar en las personas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600">💡 Analogía con el medidor de luz</h3>
              <p className="text-gray-700 mb-4">
                Es como un medidor inteligente que:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <Zap className="w-6 h-6 mb-2 text-yellow-500" />
                  <p className="font-medium">A veces subestima</p>
                  <p className="text-sm text-gray-600">Dice que consumirás 100 kWh pero usas 150</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Battery className="w-6 h-6 mb-2 text-green-500" />
                  <p className="font-medium">Pero es útil</p>
                  <p className="text-sm text-gray-600">Mejor que no tener ninguna predicción</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'simulator':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🎮 Simulador Interactivo</h2>
              <p className="text-lg text-gray-600">
                Juega con las variables y ve cómo cambia la predicción
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-purple-600">👤 Perfil del Solicitante</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💰 Ingresos Anuales: ${userProfile.income.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="20000"
                    max="150000"
                    step="5000"
                    value={userProfile.income}
                    onChange={(e) => setUserProfile({...userProfile, income: parseInt(e.target.value)})}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$20K</span>
                    <span>$150K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🏦 Monto del Préstamo: ${userProfile.loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={userProfile.loanAmount}
                    onChange={(e) => setUserProfile({...userProfile, loanAmount: parseInt(e.target.value)})}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$1K</span>
                    <span>$50K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💼 Estabilidad Laboral
                  </label>
                  <select
                    value={userProfile.employment}
                    onChange={(e) => setUserProfile({...userProfile, employment: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="stable">Trabajo Estable (militar, gobierno)</option>
                    <option value="medium">Trabajo Regular (empresa privada)</option>
                    <option value="unstable">Trabajo Temporal (freelance)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-green-600">🎯 Predicción del Modelo</h3>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg">
                  <span className="text-4xl font-bold text-green-600">{calculateRisk()}%</span>
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  Probabilidad de Pago Completo
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Fully Paid</p>
                  <p className="text-2xl font-bold text-green-600">{calculateRisk()}%</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Charged Off</p>
                  <p className="text-2xl font-bold text-red-600">{Math.max(0, 40 - calculateRisk())}%</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Current</p>
                  <p className="text-2xl font-bold text-yellow-600">{100 - calculateRisk() - Math.max(0, 40 - calculateRisk())}%</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="font-medium mb-2">💡 Recomendación:</p>
                <p className={`text-lg font-bold ${calculateRisk() > 60 ? 'text-green-600' : calculateRisk() > 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {calculateRisk() > 60 ? '✅ APROBAR' : calculateRisk() > 40 ? '⚠️ REVISAR CON CUIDADO' : '❌ RECHAZAR O PEDIR GARANTÍAS'}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600">🧪 Experimentos para Probar</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium mb-2">Experimento 1:</p>
                  <p className="text-sm text-gray-600">Aumenta los ingresos a $100K y ve cómo mejora la probabilidad</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium mb-2">Experimento 2:</p>
                  <p className="text-sm text-gray-600">Pide un préstamo de $40K con ingresos de $30K</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">💰 El Impacto Real en el Mundo</h2>
              <p className="text-lg text-gray-600">
                Como optimizar el consumo eléctrico de toda una ciudad
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-bold mb-6 text-green-600 text-center">Calculadora de Impacto</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <Users className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <h4 className="font-bold mb-2">Cooperativa Pequeña</h4>
                  <p className="text-sm text-gray-600 mb-3">1,000 préstamos/año</p>
                  <div className="space-y-2">
                    <p className="text-red-600">Sin modelo: ~300 impagos</p>
                    <p className="text-green-600 font-bold">Con modelo: ~170 impagos</p>
                    <p className="text-2xl font-bold text-green-600 mt-3">Ahorra $50M/año</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <Home className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                  <h4 className="font-bold mb-2">Banco Mediano</h4>
                  <p className="text-sm text-gray-600 mb-3">10,000 préstamos/año</p>
                  <div className="space-y-2">
                    <p className="text-red-600">Sin modelo: ~3,000 impagos</p>
                    <p className="text-green-600 font-bold">Con modelo: ~1,700 impagos</p>
                    <p className="text-2xl font-bold text-green-600 mt-3">Ahorra $500M/año</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
                  <h4 className="font-bold mb-2">Banco Grande</h4>
                  <p className="text-sm text-gray-600 mb-3">100,000 préstamos/año</p>
                  <div className="space-y-2">
                    <p className="text-red-600">Sin modelo: ~30,000 impagos</p>
                    <p className="text-green-600 font-bold">Con modelo: ~17,000 impagos</p>
                    <p className="text-2xl font-bold text-green-600 mt-3">Ahorra $5,000M/año</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-purple-600">🏠 Para las Familias</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Acceso más justo al crédito</p>
                      <p className="text-sm text-gray-600">Decisiones basadas en datos, no prejuicios</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Respuestas más rápidas</p>
                      <p className="text-sm text-gray-600">De días a minutos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Mejores tasas</p>
                      <p className="text-sm text-gray-600">Menos pérdidas = mejores condiciones</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-orange-600">🌱 Para la Sociedad</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Sistema financiero más estable</p>
                      <p className="text-sm text-gray-600">Menos crisis por impagos masivos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Inclusión financiera</p>
                      <p className="text-sm text-gray-600">Más personas pueden acceder a crédito</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Economía más eficiente</p>
                      <p className="text-sm text-gray-600">Recursos mejor distribuidos</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">🚀 El Mensaje Final</h3>
              <p className="text-lg text-gray-700 mb-6">
                En solo 20 minutos, creaste algo que puede:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <Home className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <p className="font-medium">Ayudar a familias</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="font-medium">Ahorrar millones</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Activity className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <p className="font-medium">Automatizar decisiones</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="font-medium">Generar impacto real</p>
                </div>
              </div>
              <p className="mt-6 text-xl font-bold text-purple-600">
                ¿Qué problema de tu carrera resolverás con IA? 🎯
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-8 h-8 text-green-500" />
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Predicción de Préstamos con IA</h1>
              <p className="text-sm text-gray-600">Tutorial Paso a Paso - Sin Código</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm text-gray-600">Timer:</span>
              <span className="font-mono text-sm font-bold">{formatTime(timer)}</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-1 rounded ${isPlaying ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
            
            <div className="bg-blue-100 px-3 py-1 rounded-lg">
              <span className="text-blue-700 font-medium">{getCurrentSection().duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/10 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Progreso: Sección {currentSection + 1} de {sections.length}</span>
            <span className="text-white/70">{Math.round(((currentSection + 1) / sections.length) * 100)}% completado</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-white/5 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  currentSection === index
                    ? 'bg-white text-gray-800 shadow-lg'
                    : completedSections.has(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="font-medium">{index + 1}</span>
                {completedSections.has(index) && <CheckCircle size={16} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-3xl shadow-2xl min-h-[600px] p-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 bg-gray-100 rounded-full px-6 py-2 mb-4">
              <span className="font-bold text-gray-700">Sección {currentSection + 1}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">{getCurrentSection().duration}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {getCurrentSection().title}
            </h1>
          </div>

          {/* Section Content */}
          <div className="mb-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-white/95 backdrop-blur-sm p-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Sección Anterior</span>
          </button>

          <div className="text-center">
            <p className="text-gray-600 mb-2">¿Completaste esta sección?</p>
            <button
              onClick={() => setCompletedSections(prev => new Set([...prev, currentSection]))}
              disabled={completedSections.has(currentSection)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
            >
              {completedSections.has(currentSection) ? '✅ Completado' : 'Marcar como Completado'}
            </button>
          </div>

          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <span>Siguiente Sección</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrestamosPredictorIA;