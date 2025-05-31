"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Pause, Clock, Zap, BarChart3, Target, Database, Settings, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const TutorialEnergiaML = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const steps = [
    {
      id: 'intro',
      title: '🎯 ¿Qué Vamos a Crear?',
      duration: '5 min',
      type: 'intro',
      content: {
        objective: 'Crear un modelo de IA que predice consumo energético SIN escribir código',
        benefits: [
          '⚡ Optimizar la generación de energía',
          '💰 Reducir costos operativos', 
          '🌱 Minimizar el desperdicio energético',
          '📊 Tomar decisiones inteligentes basadas en datos',
          '🏠 Garantizar suministro confiable a hogares'
        ],
        hook: '¿Cuántos aquí han sufrido un apagón en el momento más inoportuno?'
      }
    },
    {
      id: 'problem',
      title: '⚡ El Problema Real',
      duration: '5 min',
      type: 'problem',
      content: {
        scenario: 'Cooperativa Eléctrica Local',
        dilemma: '¿Cuánta energía necesitaremos generar en los próximos 30 minutos?',
        critical_facts: [
          'La electricidad no se puede "almacenar" fácilmente',
          'Lo que generas DEBE igualar lo que consumes',
          'Desequilibrio = apagones o daños en equipos'
        ],
        consequences: [
          { situation: 'Generar muy poca', result: 'Apagones y hogares sin luz 🏠💡', severity: 'high' },
          { situation: 'Generar demasiada', result: 'Desperdicio de dinero y recursos 💸', severity: 'medium' },
          { situation: 'Sin datos', result: 'Decisiones a ciegas 🎲', severity: 'high' }
        ]
      }
    },
    {
      id: 'data',
      title: '📊 Conociendo Nuestros Datos',
      duration: '3 min',
      type: 'data',
      content: {
        dataset_info: {
          file: 'power_consumption_small.csv',
          rows: '43,596 filas',
          days: '1,241 días diferentes',
          source: 'Cooperativa real que sirve a familias'
        },
        structure: [
          { column: 'time', type: 'TIMESTAMP', description: 'Momento exacto de la medición' },
          { column: 'globalactivepower', type: 'FLOAT', description: 'Consumo de energía (lo que predecimos)' },
          { column: 'id', type: 'INT', description: 'Identificador del día (001, 002...)' }
        ],
        why_30min: [
          'Tiempo real: Las decisiones energéticas son urgentes',
          'Operación práctica: Suficiente para activar generadores',
          'Precisión óptima: Muy corto = ruido, muy largo = impreciso'
        ]
      }
    },
    {
      id: 'step1',
      title: '📥 Paso 1: Importar Datos',
      duration: '3 min',
      type: 'practical',
      content: {
        action: 'Subir archivo CSV a SageMaker Canvas',
        details: [
          'Abrir SageMaker Canvas',
          'Crear nuevo dataset',
          'Subir power_consumption_small.csv',
          'Canvas detecta automáticamente 43,596 registros',
          'Verificar que identifica correctamente los tipos de datos'
        ],
        tip: 'Canvas automáticamente identifica patrones de tiempo por minuto',
        expected_result: '✅ Dataset cargado y validado'
      }
    },
    {
      id: 'step2',
      title: '⚙️ Paso 2: Configurar el Modelo',
      duration: '5 min',
      type: 'practical',
      content: {
        action: 'Configurar parámetros del modelo de predicción',
        settings: [
          { setting: 'Target', value: 'globalactivepower', explanation: 'Lo que queremos predecir' },
          { setting: 'Tipo', value: 'Time Series Forecasting', explanation: 'Detectado automáticamente' },
          { setting: 'Item ID', value: 'id', explanation: 'Cada día único' },
          { setting: 'Timestamp', value: 'time', explanation: 'Momento exacto' },
          { setting: 'Horizonte', value: '30 minutos', explanation: 'Predicción al futuro' }
        ],
        why_these_settings: 'Estas configuraciones le dicen a Canvas que queremos predecir consumo futuro basado en patrones temporales históricos'
      }
    },
    {
      id: 'step3',
      title: '🔧 Paso 3: Entrenar el Modelo',
      duration: '15 min',
      type: 'practical',
      content: {
        action: 'Entrenar el modelo con Quick Build',
        process: [
          'Seleccionar "Quick Build" (15-20 min vs Standard 4 horas)',
          'Canvas prueba múltiples algoritmos automáticamente',
          'Optimiza para patrones horarios, semanales y estacionales',
          'Valida el aprendizaje con datos de prueba'
        ],
        what_happens: 'Canvas analiza 43,596 registros, identifica patrones (días con más/menos consumo), aprende relaciones temporales',
        activity: 'Mientras entrena: discutir casos de éxito reales'
      }
    },
    {
      id: 'results',
      title: '📈 Paso 4: Interpretar Resultados',
      duration: '7 min',
      type: 'results',
      content: {
        metrics: [
          { name: 'Avg. wQL', value: '0.231', grade: '⭐⭐⭐⭐⭐', meaning: 'Excelente precisión cuantil' },
          { name: 'MAPE', value: '45.9%', grade: '⭐⭐⭐', meaning: 'Error promedio del ±46%' },
          { name: 'WAPE', value: '31.6%', grade: '⭐⭐⭐⭐', meaning: 'Consistente en escala' },
          { name: 'MASE', value: '3.838', grade: '⭐⭐', meaning: 'Necesita mejorar vs baseline' }
        ],
        interpretation: 'Si el modelo predice 100 kW de consumo, el rango real será entre 54-146 kW',
        is_good: {
          question: '¿Es suficiente 54% de precisión?',
          answer: '¡Absolutamente!',
          reasons: ['Mejor que 0% de datos', 'Permite activar generadores a tiempo', 'Reduce costos significativamente']
        }
      }
    },
    {
      id: 'decision',
      title: '🎯 Paso 5: Tomar Decisiones',
      duration: '8 min',
      type: 'interactive',
      content: {
        scenario: 'El modelo predice 100 kW ± 46 kW de consumo en 30 minutos',
        decision_options: [
          { option: 'Preparar para 54 kW (P10)', risk: 'Arriesgado', benefit: 'Mínimo desperdicio' },
          { option: 'Preparar para 100 kW (P50)', risk: 'Balanceado', benefit: 'Equilibrio costo-riesgo' },
          { option: 'Preparar para 146 kW (P90)', risk: 'Conservador', benefit: 'Nunca faltar energía' }
        ],
        factors: ['Costo de generación extra', 'Impacto social de apagones', 'Capacidad de respuesta rápida', 'Objetivos ambientales']
      }
    },
    {
      id: 'impact',
      title: '💰 Paso 6: Calcular el Impacto',
      duration: '5 min',
      type: 'impact',
      content: {
        optimization: '15% de optimización usando IA',
        savings: [
          { size: 'Cooperativa pequeña (500 hogares)', annual: '$1.125.000', per_family: '$2.250' },
          { size: 'Cooperativa grande (5,000 hogares)', annual: '$11.250.000', per_family: '$2.250' }
        ],
        real_world_impact: [
          'Mantener hospitales funcionando ⚕️',
          'Permitir que familias estudien de noche 📚',
          'Reducir emisiones de CO2 🌱',
          'Ahorrar millones en costos 💰'
        ]
      }
    },
    {
      id: 'next',
      title: '🚀 ¿Y Ahora Qué?',
      duration: '8 min',
      type: 'conclusion',
      content: {
        learned: [
          'IA es accesible para CUALQUIER carrera',
          'No necesitas programar para crear impacto',
          '30 minutos pueden cambiar vidas reales',
          'Ya tienen el poder de innovar'
        ],
        next_steps: [
          { when: 'Hoy mismo', action: 'Crear cuenta AWS gratuita', time: '10 min' },
          { when: 'Esta semana', action: 'Practicar con datasets del workshop', time: '2 horas' },
          { when: 'Próximas 2 semanas', action: 'Identificar problema en tu carrera', time: 'Reflexión' },
          { when: 'Mes 1', action: 'Crear tu primer modelo real', time: 'Proyecto' }
        ],
        challenge: 'Desafío 30 días: Crea un modelo que resuelva un problema real de tu universidad/carrera'
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🤔 Pregunta para Reflexionar:</h3>
              <p className="text-lg text-purple-700 mb-6">{step?.content?.hook}</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-purple-800 font-medium">{step?.content?.objective}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-600 mb-4">✅ Lo que lograremos:</h4>
                <ul className="space-y-2">
                  {step?.content?.benefits?.map((benefit, idx) => (
                    <li key={idx} className="text-green-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-orange-600 mb-4">⏱️ Tiempo Total:</h4>
                <div className="text-4xl font-bold text-orange-700 mb-2">45 min</div>
                <p className="text-orange-600">Incluye explicaciones y práctica</p>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-8">
            <div className="text-center bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-red-600 mb-4">{step?.content?.dilemma}</h3>
              <p className="text-lg text-red-700">Escenario: {step?.content?.scenario}</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-600 mb-4">🧠 Datos Críticos que Debes Saber:</h4>
              <div className="space-y-3">
                {step?.content?.critical_facts?.map((fact, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg text-blue-800">
                    • {fact}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {step?.content?.consequences?.map((consequence, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${
                  consequence.severity === 'high' ? 'bg-red-50 border-red-200' :
                  consequence.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="font-bold mb-2">{consequence.situation}</h4>
                  <p className="text-gray-700">{consequence.result}</p>
                  <div className={`mt-3 px-3 py-1 rounded-full text-sm font-bold text-center ${
                    consequence.severity === 'high' ? 'bg-red-500 text-white' :
                    consequence.severity === 'medium' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {consequence.severity === 'high' ? 'CRÍTICO' : 
                     consequence.severity === 'medium' ? 'COSTOSO' : 'RIESGOSO'}
                  </div>
                </div>
              ))}
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
                    <strong>Periodo:</strong> {step?.content?.dataset_info?.days}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong>Fuente:</strong> {step?.content?.dataset_info?.source}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-600 mb-4">🏗️ Estructura de Datos</h4>
                <div className="space-y-3">
                  {step?.content?.structure?.map((col, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg">
                      <div className="font-bold text-green-800">{col.column}</div>
                      <div className="text-sm text-gray-600">{col.type}</div>
                      <div className="text-green-700">{col.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-orange-600 mb-4">⏰ ¿Por qué 30 minutos es Crítico?</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {step?.content?.why_30min?.map((reason, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg text-orange-800">
                    {reason}
                  </div>
                ))}
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
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4">📋 Pasos Detallados:</h4>
                <div className="space-y-3">
                  {(step?.content?.details || step?.content?.process || []).map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {step?.content?.settings && (
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-purple-600 mb-4">⚙️ Configuraciones:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {step?.content?.settings.map((setting, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-purple-800">{setting.setting}: {setting.value}</div>
                      <div className="text-sm text-purple-600">{setting.explanation}</div>
                    </div>
                  ))}
                </div>
                {step?.content?.why_these_settings && (
                  <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                    <p className="text-purple-800">{step?.content?.why_these_settings}</p>
                  </div>
                )}
              </div>
            )}
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-green-600 mb-2">✅ Resultado Esperado:</h4>
              <p className="text-green-700">{step?.content?.expected_result}</p>
              {step?.content?.tip && (
                <div className="mt-3 bg-green-100 p-3 rounded-lg">
                  <p className="text-green-800"><strong>💡 Tip:</strong> {step?.content?.tip}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-xl font-bold text-orange-600 mb-4">🧠 En Palabras Simples:</h3>
              <p className="text-lg text-orange-700 mb-6">{step?.content?.interpretation}</p>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-800 mb-3">{step?.content?.is_good?.question}</h4>
                <p className="text-xl font-bold text-green-600 mb-3">{step?.content?.is_good?.answer}</p>
                <ul className="space-y-2">
                  {step?.content?.is_good?.reasons.map((reason, idx) => (
                    <li key={idx} className="text-gray-700">✅ {reason}</li>
                  ))}
                </ul>
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
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
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
                </div>
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
              <h3 className="text-2xl font-bold text-green-600 mb-4">💰 Impacto Económico Real</h3>
              <p className="text-lg text-green-700">Con {step?.content?.optimization}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {step?.content?.savings?.map((saving, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-purple-600 mb-4">{saving.size}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-white p-3 rounded-lg">
                      <span>Ahorro anual:</span>
                      <span className="font-bold text-green-600">{saving.annual}</span>
                    </div>
                    <div className="flex justify-between bg-white p-3 rounded-lg">
                      <span>Por familia:</span>
                      <span className="font-bold text-yellow-600">{saving.per_family}/año</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-600 mb-4">🌟 Impacto Social Real:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {step?.content?.real_world_impact?.map((impact, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg text-orange-800">
                    {impact}
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
              <h3 className="text-2xl font-bold text-green-600 mb-4">🎓 Lo que Acabamos de Lograr:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {step?.content?.learned?.map((learning, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">{learning}</span>
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
              <h3 className="text-2xl font-bold text-orange-600 mb-4">💪 Desafío Personal:</h3>
              <p className="text-lg text-orange-700">{step?.content?.challenge}</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
            <p className="text-lg text-gray-600">Contenido del paso...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Predicción Energética con IA</h1>
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
            {steps.map((step, index) => (
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

export default TutorialEnergiaML;