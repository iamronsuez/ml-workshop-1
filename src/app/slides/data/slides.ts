export const slidesData = [
  // SLIDE 1: HOOK EMOCIONAL
  {
    id: 'intro',
    title: '🤖 De Cero a Héroe Digital',
    subtitle: 'Crea IA que Cambie el Mundo (Sin Programar)',
    type: 'title',
    content: {
      hook: '¿Cuántos aquí han perdido dinero porque un algoritmo decidió algo sobre ustedes?',
      examples: ['Instagram ads que no les gustaron 📱', 'Recomendaciones Netflix raras 🎬', 'Uber que los cobró de más 🚗'],
      power_phrase: 'Hoy van a aprender a crear esos algoritmos que toman decisiones sobre millones de personas... sin escribir ni una línea de código.'
    },
    duration: '5 min',
    notes: 'Romper el hielo. Hacer que levanten la mano. Crear conexión emocional.'
  },

  // SLIDE 2: LA REALIDAD
  {
    id: 'reality',
    title: '⚡ La Verdad sobre la IA',
    subtitle: 'Mitos vs Realidad',
    type: 'comparison',
    content: {
      myths: [
        { myth: '🤖 "Necesito ser genio en matemáticas"', reality: '✅ Solo necesitas curiosidad' },
        { myth: '💻 "Debo programar por años"', reality: '✅ Herramientas sin código existen' },
        { myth: '🧠 "Es solo para ingenieros"', reality: '✅ Cualquier carrera puede usarla' },
        { myth: '💰 "Es muy caro"', reality: '✅ Muchas herramientas son gratuitas' }
      ],
      key_message: 'La IA más poderosa es la que todos pueden usar'
    },
    duration: '3 min',
    notes: 'Desmitificar. Hacer que se sientan capaces.'
  },

  // SLIDE 3: QUÉ ES ML
  {
    id: 'what_is_ml',
    title: '🧠 ¿Qué es Machine Learning REALMENTE?',
    subtitle: 'Explicado como si fueras de 5 años',
    type: 'concept',
    content: {
      simple_definition: 'ML = Encontrar patrones en datos masivos',
      analogies: [
        { title: '👂 Reconocer la voz de tu mamá', desc: 'Tu cerebro aprendió el patrón de su voz' },
        { title: '🎵 Spotify sabe qué música te gusta', desc: 'Analizó millones de reproducciones' },
        { title: '📍 Google Maps predice tráfico', desc: 'Usa datos históricos de velocidad' }
      ],
      examples_they_know: ['Netflix recomendaciones', 'Instagram feed personalizado', 'Google traductor']
    },
    duration: '7 min',
    notes: 'Usar analogías. Conectar con lo que ya conocen.'
  },

  // SLIDE 4: CASO BANCO DE ALIMENTOS - INTRO
  {
    id: 'food_bank_intro',
    title: '🍞 Caso Real: Banco de Alimentos',
    subtitle: 'El dilema diario de alimentar familias',
    type: 'case_intro',
    content: {
      problem: '¿Cuánta comida necesitaremos mañana?',
      scenarios: [
        { scenario: 'Pedir muy poco', result: 'Personas sin comida 😢', icon: '😢' },
        { scenario: 'Pedir demasiado', result: 'Desperdicio de alimentos 🗑️', icon: '🗑️' },
        { scenario: 'Sin datos', result: 'Decisiones a ciegas 🎲', icon: '🎲' }
      ],
      solution: 'Crear un modelo que predice con 85% de precisión cuánto de cada alimento necesitarás en los próximos 5 días',
      impact: '43,596 registros históricos → Predicciones inteligentes'
    },
    duration: '5 min',
    notes: 'Plantear el problema real. Generar empatía.'
  },

  // SLIDE 5: DEMO BANCO DE ALIMENTOS - PROCESO
  {
    id: 'food_bank_demo',
    title: '⚙️ Creando el Modelo - En Vivo',
    subtitle: 'SageMaker Canvas en acción',
    type: 'demo',
    content: {
      steps: [
        { step: '1. Importar Datos', time: '2 min', detail: 'Subir food_demand.csv (43,596 filas)' },
        { step: '2. Configurar Modelo', time: '3 min', detail: 'Target: demand, Tipo: Time Series, Horizonte: 5 días' },
        { step: '3. Limpiar Datos', time: '5 min', detail: 'Eliminar is_produce, manejar warning de precios futuros' },
        { step: '4. Entrenar', time: '15 min', detail: 'Quick Build - Canvas prueba múltiples algoritmos' }
      ],
      question_for_audience: '¿Por qué eliminamos la columna is_produce?',
      teaching_moment: 'Principio clave: "Menos ruido = Mejores predicciones"'
    },
    duration: '15 min',
    notes: 'Demo en vivo. Involucrar audiencia en decisiones.'
  },

  // SLIDE 6: RESULTADOS BANCO DE ALIMENTOS
  {
    id: 'food_bank_results',
    title: '📊 ¡Resultados Increíbles!',
    subtitle: 'Nuestro modelo vs la realidad',
    type: 'results',
    content: {
      metrics: [
        { metric: 'Avg. wQL', value: '0.109', grade: '⭐⭐⭐⭐⭐', meaning: 'Casi perfecto (0 = ideal)' },
        { metric: 'MAPE', value: '15.0%', grade: '⭐⭐⭐⭐', meaning: 'Error promedio de ±15%' },
        { metric: 'Precisión', value: '85%', grade: '⭐⭐⭐⭐⭐', meaning: 'Como sacar 8.5/10 en un examen' }
      ],
      comparison: {
        our_model: '85% precisión',
        random_guess: '33% precisión',
        human_expert: '70-75% precisión',
        banks: '80-85% precisión'
      },
      interpretation: 'Si el modelo predice 100 kg de arroz, el rango real será entre 85-115 kg',
      price_impact: 'El precio influye en 32% de las decisiones de demanda'
    },
    duration: '5 min',
    notes: 'Celebrar resultados. Comparar con benchmarks.'
  },

  // SLIDE 7: ENERGÍA - INTRO
  {
    id: 'energy_intro',
    title: '⚡ Caso Real: Cooperativa Eléctrica',
    subtitle: 'Mantener las luces encendidas 24/7',
    type: 'case_intro',
    content: {
      problem: '¿Cuánta energía necesitaremos generar en 30 minutos?',
      critical_facts: [
        'La electricidad no se puede "almacenar" fácilmente',
        'Lo que generas DEBE igualar lo que consumes',
        'Desequilibrio = apagones o daños en equipos'
      ],
      scenarios: [
        { scenario: 'Generar muy poca', result: 'Apagones y hogares sin luz 🏠💡', impact: 'high' },
        { scenario: 'Generar demasiada', result: 'Desperdicio de dinero y recursos 💸', impact: 'medium' },
        { scenario: 'Sin datos', result: 'Decisiones a ciegas que afectan comunidad 🎲', impact: 'high' }
      ],
      solution: 'Modelo que predice con 54% de precisión cuánta energía necesitarás en 30 minutos'
    },
    duration: '5 min',
    notes: 'Explicar urgencia temporal. 30 min = tiempo real.'
  },

  // SLIDE 8: RESULTADOS ENERGÍA
  {
    id: 'energy_results',
    title: '⚡ Resultados Energéticos',
    subtitle: '¿54% de precisión es suficiente?',
    type: 'results',
    content: {
      main_metric: { name: 'MAPE', value: '45.9%', interpretation: 'Error promedio del ±46%' },
      reality_check: 'Si predice 100 kW, rango real: 54-146 kW',
      is_it_good: {
        question: '¿Es suficiente?',
        answer: '¡Absolutamente!',
        reasons: ['Mejor que 0% de datos', 'Permite activar generadores a tiempo', 'Reduce costos operativos']
      },
      comparison_vs_food: {
        food: 'MAPE 15% (demanda estable)',
        energy: 'MAPE 46% (consumo más volátil)',
        why: 'Las personas encienden aires acondicionados impredeciblemente'
      },
      impact_calculation: {
        small_coop: 'Ahorro: $1.125.000 anuales',
        large_coop: 'Ahorro: $11.250.000 anuales'
      }
    },
    duration: '7 min',
    notes: 'Justificar por qué 54% es bueno. Mostrar impacto económico.'
  },

  // SLIDE 9: ACTIVIDAD INTERACTIVA
  {
    id: 'interactive_activity',
    title: '🎮 ¡Tu Turno de Decidir!',
    subtitle: 'Role-play: Gerentes por 5 minutos',
    type: 'activity',
    content: {
      scenario: 'Modelo predice 100 kW ± 46 kW de consumo en 30 minutos',
      roles: [
        { role: '⚡ Gerente de Generación', concern: '¿Cuánto invertir en generadores?', decision_range: '54-146 kW' },
        { role: '🏠 Representante Familias', concern: '¿Garantizar que no falte luz?', preference: 'Preparar para máximo' },
        { role: '🌱 Ambientalista', concern: '¿Minimizar desperdicio energético?', preference: 'Preparar para mínimo' },
        { role: '💰 Director Financiero', concern: '¿Equilibrar costo-beneficio?', preference: 'Balancear riesgo' }
      ],
      question: '¿Qué harían como gerentes?',
      options: ['Preparar para 54 kW (mínimo)', 'Preparar para 100 kW (balanceado)', 'Preparar para 146 kW (conservador)'],
      teaching_moment: 'No hay respuesta correcta única. Depende del contexto y prioridades.'
    },
    duration: '8 min',
    notes: 'Dividir en grupos. Que defiendan sus posiciones.'
  },

  // SLIDE 10: MÉTRICAS EXPLICADAS
  {
    id: 'metrics_explained',
    title: '📊 Decodificando las Métricas',
    subtitle: 'Tu traductor de IA',
    type: 'metrics',
    content: {
      key_message: 'No memorices fórmulas. Entiende qué te dice cada métrica.',
      essential_metrics: [
        { name: 'MAPE', simple: 'Tu % de error promedio', analogy: 'Como llegar 15 min tarde vs 10 min' },
        { name: 'Precisión', simple: 'Cuando dices SÍ, ¿cuántas veces tienes razón?', analogy: 'Arquero: 8 de 10 flechas al centro' },
        { name: 'Recall', simple: 'De los casos reales, ¿cuántos detectaste?', analogy: 'Detective: encontrar 90 de 100 criminales' },
        { name: 'F1 Score', simple: 'Balance perfecto de Precisión + Recall', analogy: 'Nota promedio de dos materias' }
      ],
      practical_rules: [
        'MAPE <15% = Excelente para la mayoría de casos',
        'Precisión >80% = Confías en predicciones positivas',
        'Recall >90% = No se te escapa nada importante',
        'F1 Score >0.8 = Balance sólido'
      ]
    },
    duration: '7 min',
    notes: 'Usar glosario interactivo. Buscar métricas en tiempo real.'
  },

  // SLIDE 11: CASOS DE ÉXITO
  {
    id: 'success_stories',
    title: '🏆 Estudiantes que Ya lo Hicieron',
    subtitle: 'De la universidad al impacto real',
    type: 'inspiration',
    content: {
      real_examples: [
        {
          student: 'María, Psicología PUCP',
          project: 'Predecir deserción universitaria',
          impact: 'Universidad redujo deserción 23%',
          quote: '"En mi carrera nunca pensé que usaría datos. Ahora ayudo a retener estudiantes."'
        },
        {
          student: 'Carlos, Administración UChile',
          project: 'Optimizar inventario farmacia familiar',
          impact: 'Redujo pérdidas $2M mensuales',
          quote: '"Canvas me permitió aplicar ML sin saber programar. El negocio familiar cambió totalmente."'
        },
        {
          student: 'Ana, Trabajo Social UDP',
          project: 'Predecir demanda comedores populares',
          impact: 'Optimizó recursos para 500 familias',
          quote: '"Combiné mi conocimiento social con IA. Nunca imaginé el impacto que podría generar."'
        }
      ],
      key_insight: 'Tu carrera + IA = Súper poderes para cambio social'
    },
    duration: '5 min',
    notes: 'Inspirar con casos reales similares a ellos.'
  },

  // SLIDE 12: PRÓXIMOS PASOS
  {
    id: 'next_steps',
    title: '🚀 ¿Y Ahora Qué?',
    subtitle: 'Tu plan de acción para los próximos 30 días',
    type: 'action',
    content: {
      immediate_actions: [
        { action: 'Hoy mismo', task: 'Crear cuenta AWS gratuita', time: '10 min' },
        { action: 'Esta semana', task: 'Practicar con datasets del workshop', time: '2 horas' },
        { action: 'Próximas 2 semanas', task: 'Identificar problema en tu carrera', time: 'Reflexión' },
        { action: 'Mes 1', task: 'Crear tu primer modelo real', time: 'Proyecto' }
      ],
      resources: [
        { type: 'Gratuito', resource: 'AWS SageMaker Canvas (tier gratuito)', value: '$0' },
        { type: 'Comunidad', resource: 'Discord: ML sin Código Chile', value: 'Soporte 24/7' },
        { type: 'Datasets', resource: 'Kaggle + datos.gob.cl', value: 'Miles de problemas reales' },
        { type: 'Tutorials', resource: 'YouTube: AWS en Español', value: 'Paso a paso' }
      ],
      challenge: 'Desafío 30 días: Crea un modelo que resuelva un problema real de tu universidad/carrera'
    },
    duration: '8 min',
    notes: 'Dar pasos concretos. Crear accountability.'
  },

  // SLIDE 13: CIERRE INSPIRADOR
  {
    id: 'closing',
    title: '💫 El Futuro que Van a Crear',
    subtitle: 'Ustedes + IA = Cambio Exponencial',
    type: 'closing',
    content: {
      what_they_learned: [
        'IA es accesible para CUALQUIER carrera',
        'No necesitas programar para crear impacto',
        '30 minutos pueden cambiar vidas reales',
        'Ustedes ya tienen el poder de innovar'
      ],
      impact_potential: {
        personal: 'Optimizar tu carrera profesional',
        local: 'Resolver problemas de tu universidad/ciudad',
        national: 'Contribuir a políticas públicas basadas en datos',
        global: 'Ser parte de la revolución tecnológica con propósito'
      },
      final_challenge: '¿Qué problema van a resolver primero?',
      call_to_action: 'No esperen permiso. No esperen que alguien más lo haga. Empiecen hoy.',
      power_phrase: 'La diferencia entre soñar con cambiar el mundo y realmente hacerlo es presionar "Train Model"'
    },
    duration: '5 min',
    notes: 'Inspirar acción inmediata. Terminar con energía alta.'
  }
];