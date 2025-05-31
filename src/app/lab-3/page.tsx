"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Pause, Clock, Package, TrendingUp, AlertCircle, CheckCircle, DollarSign, Home, BarChart3, Target, Users, ShoppingCart, Activity, Database, Settings, HelpCircle, LineChart, PieChart } from 'lucide-react';

const BancoAlimentosML = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [selectedDecision, setSelectedDecision] = useState<number>(0);
  const [priceImpact, setPriceImpact] = useState(32);

  const steps = [
    {
      id: 'intro',
      title: '🎯 El Desafío del Banco de Alimentos',
      duration: '5 min',
      type: 'intro',
      content: {
        objective: 'Crear un modelo de IA que predice demanda de alimentos SIN escribir código',
        benefits: [
          '✅ Reducir desperdicio de alimentos',
          '✅ Garantizar disponibilidad para beneficiarios',
          '✅ Optimizar recursos limitados',
          '✅ Tomar decisiones basadas en datos'
        ],
        hook: '¿Cuántas veces has visto comida desperdiciada mientras otros tienen hambre?'
      }
    },
    {
      id: 'problem',
      title: '📊 El Dilema Diario',
      duration: '5 min',
      type: 'problem',
      content: {
        scenario: 'Banco de Alimentos Local',
        dilemma: '¿Cuánta comida necesitaremos mañana?',
        challenges: [
          { situation: 'Pedir muy poco', result: 'Personas sin comida 😢', severity: 'high' },
          { situation: 'Pedir demasiado', result: 'Desperdicio de alimentos 🗑️', severity: 'medium' },
          { situation: 'Sin datos', result: 'Decisiones a ciegas 🎲', severity: 'high' }
        ],
        solution: 'Modelo que predice con 85% de precisión para los próximos 5 días'
      }
    },
    {
      id: 'data',
      title: '📁 Conociendo Nuestros Datos',
      duration: '3 min',
      type: 'data',
      content: {
        dataset_info: {
          file: 'food_demand.csv',
          rows: '43,596 filas',
          products: 'Múltiples productos diferentes',
          patterns: 'Patrones temporales identificables'
        },
        structure: [
          { column: 'date', type: 'TIMESTAMP', description: 'Fecha del registro' },
          { column: 'item_id', type: 'INT', description: 'Identificador del producto (001, 002...)' },
          { column: 'demand', type: 'FLOAT', description: 'Cantidad demandada (lo que predecimos)' },
          { column: 'price', type: 'FLOAT', description: 'Precio del producto' },
          { column: 'is_produce', type: 'BOOL', description: 'Si es producto fresco (se elimina)' }
        ]
      }
    },
    {
      id: 'step1',
      title: '📥 Paso 1: Importar Datos',
      duration: '2 min',
      type: 'practical',
      content: {
        action: 'Subir archivo CSV a SageMaker Canvas',
        details: [
          'Abrir SageMaker Canvas',
          'Crear nuevo dataset',
          'Subir food_demand.csv',
          'Canvas detecta 43,596 registros',
          'Identifica automáticamente tipos de datos'
        ],
        expected_result: '✅ Dataset cargado y validado'
      }
    },
    {
      id: 'step2',
      title: '⚙️ Paso 2: Configurar el Modelo',
      duration: '3 min',
      type: 'practical',
      content: {
        action: 'Configurar parámetros del modelo de predicción',
        settings: [
          { setting: 'Target', value: 'demand', explanation: 'Lo que queremos predecir' },
          { setting: 'Tipo', value: 'Time Series Forecasting', explanation: 'Detectado automáticamente' },
          { setting: 'Item ID', value: 'item_id', explanation: 'Cada producto único' },
          { setting: 'Timestamp', value: 'date', explanation: 'Fecha del registro' },
          { setting: 'Horizonte', value: '5 días', explanation: 'Predicción al futuro' }
        ]
      }
    },
    {
      id: 'step3',
      title: '🧹 Paso 3: Limpieza de Datos',
      duration: '5 min',
      type: 'cleaning',
      content: {
        action: 'Preparar datos para el modelo',
        remove_column: {
          name: 'is_produce',
          reason: 'No aporta información - todos los valores son iguales',
          principle: 'Menos ruido = Mejores predicciones'
        },
        warning: {
          title: 'Future Values Warning',
          message: 'No hay valores futuros para price',
          meaning: 'Tenemos precios históricos pero NO futuros',
          analogy: 'Como predecir ventas de cine sin saber el precio futuro de las entradas'
        }
      }
    },
    {
      id: 'step4',
      title: '🔧 Paso 4: Entrenar el Modelo',
      duration: '15 min',
      type: 'training',
      content: {
        action: 'Entrenar con Quick Build',
        process: [
          'Seleccionar "Quick Build" (15-20 min)',
          'Canvas prueba múltiples algoritmos',
          'Optimiza parámetros automáticamente',
          'Valida el aprendizaje con datos de prueba'
        ],
        activities: [
          { time: '1-3 min', activity: 'Conceptos clave', question: '¿Qué patrones creen que encontrará?' },
          { time: '4-6 min', activity: 'Debate sobre precios futuros', question: '¿Ignoramos, asumimos constante o predecimos?' },
          { time: '7-9 min', activity: 'Casos de éxito', question: '¿Qué otros problemas sociales podríamos resolver?' },
          { time: '10-12 min', activity: 'Métricas como calificaciones', question: '¿Confiarían en un modelo con 8.5/10?' },
          { time: '13-15 min', activity: 'Role play de decisiones', question: '¿Pides 85, 100 o 115 kg?' }
        ]
      }
    },
    {
      id: 'results',
      title: '📈 Paso 5: Interpretar Resultados',
      duration: '7 min',
      type: 'results',
      content: {
        metrics: [
          { name: 'Avg. wQL', value: '0.109', grade: '⭐⭐⭐⭐⭐', meaning: 'Casi perfecto (0 = ideal)' },
          { name: 'MAPE', value: '15.0%', grade: '⭐⭐⭐⭐', meaning: 'Error promedio de ±15%' },
          { name: 'WAPE', value: '15.6%', grade: '⭐⭐⭐⭐', meaning: 'Consistente en todos los tamaños' },
          { name: 'MASE', value: '1.389', grade: '⭐⭐⭐', meaning: 'Mejor que métodos básicos' },
          { name: 'RMSE', value: '4.632', grade: '⭐⭐⭐', meaning: 'Error cuadrático medio' }
        ],
        column_impact: {
          price: 32.14,
          explanation: 'El precio influye en 1/3 de las decisiones de demanda'
        },
        interpretation: 'Si el modelo predice 100 kg de arroz, el rango real será entre 85-115 kg'
      }
    },
    {
      id: 'visualization',
      title: '📊 Análisis Visual de Predicción',
      duration: '5 min',
      type: 'visualization',
      content: {
        chart_elements: [
          { element: 'Línea Azul', description: 'Demanda real hasta el 26 de noviembre', value: '~2.7 unidades' },
          { element: 'P90 (Amarillo)', description: 'Límite superior', value: '~3.4 unidades' },
          { element: 'P50 (Verde)', description: 'Predicción central', value: '~2.7 unidades' },
          { element: 'P10 (Rosa)', description: 'Límite inferior', value: '~2.3 unidades' }
        ],
        insights: [
          'Histórico estable = Producto básico (arroz, aceite, sal)',
          'Bandas se abren = Mayor incertidumbre en el futuro',
          'Decisión: Pedir entre 2.3 y 3.4 unidades'
        ]
      }
    },
    {
      id: 'decision',
      title: '🎯 Tomar Decisiones Inteligentes',
      duration: '8 min',
      type: 'interactive',
      content: {
        scenario: 'El modelo predice 100 kg ± 15 kg de arroz',
        decision_options: [
          { option: 'P10: Pedir 85 kg', risk: 'Arriesgado', benefit: 'Mínimo desperdicio', icon: '🎲' },
          { option: 'P50: Pedir 100 kg', risk: 'Balanceado', benefit: 'Equilibrio óptimo', icon: '⚖️' },
          { option: 'P90: Pedir 115 kg', risk: 'Conservador', benefit: 'Nunca faltar', icon: '🛡️' }
        ],
        factors: [
          'Presupuesto disponible',
          'Capacidad de almacenamiento',
          'Impacto social de faltar',
          'Costo del desperdicio'
        ]
      }
    },
    {
      id: 'impact',
      title: '💰 Calculando el Impacto Real',
      duration: '5 min',
      type: 'impact',
      content: {
        optimization: '15% de optimización usando IA',
        savings: [
          { size: 'Banco pequeño (1,000 kg/sem)', saved: '150 kg salvados', families: '~30 familias extra' },
          { size: 'Banco mediano (5,000 kg/sem)', saved: '750 kg salvados', families: '~150 familias extra' },
          { size: 'Banco grande (20,000 kg/sem)', saved: '3,000 kg salvados', families: '~600 familias extra' }
        ],
        real_cases: [
          { org: 'Feeding America', result: '30% menos desperdicio' },
          { org: 'Second Harvest', result: '25% más eficiencia' },
          { org: 'Food Bank Singapore', result: '40% optimización de rutas' }
        ]
      }
    },
    {
      id: 'next',
      title: '🚀 Próximos Pasos',
      duration: '5 min',
      type: 'conclusion',
      content: {
        key_messages: [
          'No necesitas programar para crear IA con impacto social',
          '85% de precisión es mejor que 0% de datos',
          'El modelo sugiere, ustedes deciden',
          'Lo que aprenden hoy sirve para cualquier predicción'
        ],
        next_steps: [
          { when: 'Hoy', action: 'Practicar con sus datos', time: '30 min' },
          { when: 'Esta semana', action: 'Identificar problemas locales', time: '2 horas' },
          { when: 'Próximas 2 semanas', action: 'Formar equipos interdisciplinarios', time: 'Networking' },
          { when: 'Mes 1', action: 'Compartir lo aprendido', time: 'Workshop' }
        ],
        final_message: 'Ustedes + IA = Cambio Social'
      }
    }
  ];

  useEffect(() => {
    let interval = undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => prev + 1);
      setTimer(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setTimer(0);
    }
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentStep = () => steps[currentStep];

  const renderStepContent = () => {
    const step = getCurrentStep();
    
    switch (step.type) {
      case 'intro':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">🤔 Pregunta para Reflexionar:</h3>
              <p className="text-lg text-emerald-700 mb-6">{step?.content?.hook}</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-emerald-800 font-medium">{step?.content?.objective}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-indigo-600 mb-4">✅ Lo que lograremos:</h4>
                <ul className="space-y-2">
                  {step?.content?.benefits?.map((benefit, idx) => (
                    <li key={idx} className="text-indigo-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-orange-600 mb-4">⏱️ Tiempo Total:</h4>
                <div className="text-4xl font-bold text-orange-700 mb-2">30 min</div>
                <p className="text-orange-600">Crear IA con impacto social real</p>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-8">
            <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-600 mb-4">{step?.content?.dilemma}</h3>
              <p className="text-lg text-purple-700">Escenario: {step?.content?.scenario}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {step?.content?.challenges?.map((challenge, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${
                  challenge.severity === 'high' ? 'bg-red-50 border-red-200' :
                  challenge.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="font-bold mb-2">{challenge.situation}</h4>
                  <p className="text-gray-700 text-2xl mb-3">{challenge.result}</p>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold text-center ${
                    challenge.severity === 'high' ? 'bg-red-500 text-white' :
                    challenge.severity === 'medium' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {challenge.severity === 'high' ? 'CRÍTICO' : 'COSTOSO'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">💡 La Solución con IA:</h3>
              <p className="text-lg text-emerald-700">{step?.content?.solution}</p>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-600 mb-4">📁 Nuestro Dataset</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <strong>Archivo:</strong> {step?.content?.dataset_info?.file}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong>Registros:</strong> {step?.content?.dataset_info?.rows}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong>Productos:</strong> {step?.content?.dataset_info?.products}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong>Patrones:</strong> {step?.content?.dataset_info?.patterns}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-indigo-600 mb-4">🏗️ Estructura de Datos</h4>
                <div className="space-y-3">
                  {step?.content?.structure?.map((col, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg">
                      <div className="font-bold text-indigo-800">{col.column}</div>
                      <div className="text-sm text-gray-600">{col.type}</div>
                      <div className="text-indigo-700">{col.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">🎯 Acción a Realizar:</h3>
              <p className="text-lg text-indigo-700">{step?.content?.action}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">📋 Pasos Detallados:</h4>
              <div className="space-y-3">
                {(step?.content?.details || [])?.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {step?.content?.settings && (
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-purple-600 mb-4">⚙️ Configuraciones:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {step?.content?.settings?.map((setting, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-purple-800">{setting.setting}: {setting.value}</div>
                      <div className="text-sm text-purple-600">{setting.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {step?.content?.expected_result && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-green-600 mb-2">✅ Resultado Esperado:</h4>
                <p className="text-green-700">{step?.content?.expected_result}</p>
              </div>
            )}
          </div>
        );

      case 'cleaning':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">🧹 {step?.content?.action}</h3>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">❌ Eliminar columna: {step?.content?.remove_column?.name}</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Razón:</strong> {step?.content?.remove_column?.reason}
                </p>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    💡 Principio clave: "{step?.content?.remove_column?.principle}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ {step?.content?.warning?.title}</h3>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-lg text-gray-800 mb-3">"{step?.content?.warning?.message}"</p>
                <div className="space-y-3">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <p className="text-red-700"><strong>¿Qué significa?</strong> {step?.content?.warning?.meaning}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-yellow-700"><strong>Analogía:</strong> {step?.content?.warning?.analogy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'training':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🔧 {step?.content?.action}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {step?.content?.process?.map((process, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700">{process}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-indigo-600 mb-6">💡 Actividades Durante el Entrenamiento</h3>
              <div className="space-y-4">
                {step?.content?.activities?.map((activity, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-indigo-700">Minutos {activity.time}</span>
                      <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{activity.activity}</span>
                    </div>
                    <p className="text-gray-700 italic">{activity.question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {step?.content?.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                  <h4 className="text-lg font-bold text-indigo-600 mb-2">{metric.name}</h4>
                  <div className="text-3xl font-bold text-indigo-800 mb-2">{metric.value}</div>
                  <div className="text-xl mb-2">{metric.grade}</div>
                  <p className="text-sm text-indigo-600">{metric.meaning}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-600 mb-4">📊 Column Impact</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold">Price Impact</span>
                  <span className="text-3xl font-bold text-orange-600">{step?.content?.column_impact?.price}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div 
                    className="bg-orange-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${priceImpact}%` }}
                  />
                </div>
                <p className="text-gray-700">{step?.content?.column_impact?.explanation}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-green-600 mb-4">🧠 En Palabras Simples:</h3>
              <p className="text-lg text-green-700">{step?.content?.interpretation}</p>
            </div>
          </div>
        );

      case 'visualization':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">📊 El Gráfico Muestra:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {step?.content?.chart_elements?.map((element, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-800 mb-2">{element.element}</h4>
                    <p className="text-gray-700">{element.description}</p>
                    <p className="text-indigo-600 font-medium mt-2">{element.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-600 mb-4">💡 Interpretación Práctica:</h3>
              <div className="space-y-3">
                {step?.content?.insights?.map((insight, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-start space-x-3">
                    <LineChart className="w-5 h-5 text-orange-500 mt-0.5" />
                    <p className="text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🎯 Escenario de Decisión:</h3>
              <p className="text-lg text-purple-700">{step?.content?.scenario}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {step?.content?.decision_options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDecision(idx)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                    selectedDecision === idx 
                      ? 'bg-purple-100 border-purple-500 shadow-lg transform scale-105' 
                      : 'bg-white border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-4xl mb-3">{option.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{option.option}</h4>
                  <div className="space-y-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      option.risk === 'Arriesgado' ? 'bg-red-100 text-red-600' :
                      option.risk === 'Balanceado' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      Riesgo: {option.risk}
                    </div>
                    <p className="text-gray-600">{option.benefit}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-orange-600 mb-4">🤔 Factores a Considerar:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {step?.content?.factors?.map((factor, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg text-orange-800">
                    • {factor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-600 mb-4">💰 Impacto Real</h3>
              <p className="text-lg text-green-700">{step?.content?.optimization}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {step?.content?.savings?.map((saving, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-purple-600 mb-4">{saving.size}</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <Package className="w-6 h-6 text-purple-500 mb-2" />
                      <p className="font-bold text-green-600">{saving.saved}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <Users className="w-6 h-6 text-blue-500 mb-2" />
                      <p className="font-bold text-blue-600">{saving.families}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🌟 Casos de Éxito Reales:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {step?.content?.real_cases?.map((case_, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <h4 className="font-bold text-gray-800">{case_.org}</h4>
                    <p className="text-orange-600 font-medium">{case_.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-600 mb-4">🎓 Mensajes Clave:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {step?.content?.key_messages?.map((message, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">{message}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">🚀 Tu Plan de Acción:</h3>
              <div className="space-y-4">
                {step?.content?.next_steps?.map((step, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-purple-800">{step.when}</div>
                      <div className="text-purple-600">{step.action}</div>
                    </div>
                    <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-700 font-medium">
                      {step.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-4">
                {step?.content?.final_message}
              </h3>
              <p className="text-lg text-orange-700">
                La tecnología más poderosa es la que todos pueden usar
              </p>
              <p className="text-xl font-bold text-orange-800 mt-4">
                ¿Listos para cambiar el mundo, un modelo a la vez? 🚀
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
            <ShoppingCart className="w-8 h-8 text-green-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Predicción de Demanda para Bancos de Alimentos</h1>
              <p className="text-sm text-gray-600">Machine Learning sin código - Amazon SageMaker Canvas</p>
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
              <span className="text-blue-700 font-medium">{getCurrentStep().duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/10 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Progreso: Paso {currentStep + 1} de {steps.length}</span>
            <span className="text-white/70">{Math.round(((currentStep + 1) / steps.length) * 100)}% completado</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="bg-white/5 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {steps?.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  currentStep === index
                    ? 'bg-white text-gray-800 shadow-lg'
                    : completedSteps.has(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="font-medium">{index + 1}</span>
                {completedSteps.has(index) && <CheckCircle size={16} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-3xl shadow-2xl min-h-[600px] p-8">
          {/* Step Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 bg-gray-100 rounded-full px-6 py-2 mb-4">
              <span className="font-bold text-gray-700">Paso {currentStep + 1}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">{getCurrentStep().duration}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {getCurrentStep().title}
            </h1>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStepContent()}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-white/95 backdrop-blur-sm p-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Paso Anterior</span>
          </button>

          <div className="text-center">
            <p className="text-gray-600 mb-2">¿Completaste este paso?</p>
            <button
              onClick={() => setCompletedSteps(prev => new Set([...prev, currentStep]))}
              disabled={completedSteps.has(currentStep)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
            >
              {completedSteps.has(currentStep) ? '✅ Completado' : 'Marcar como Completado'}
            </button>
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <span>Siguiente Paso</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BancoAlimentosML;