"use client";
//@ts-nocheck
import React, { useState, useEffect } from "react";
import {
	ChevronLeft,
	ChevronRight,
	Play,
	Pause,
	Brain,
	Database,
	Target,
	Layers,
	GitBranch,
	Shuffle,
	TrendingUp,
	Users,
	Zap,
	Coffee,
} from "lucide-react";
import { useSlideNavigation } from "@/hooks/useNavigation";

const MLBasicsPresentation = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(false);
	const [timer, setTimer] = useState(0);
	const [interactionResults, setInteractionResults] = useState({});

	const slides = [
		// SLIDE 1: GANCHO INICIAL
		{
			id: "intro",
			title: "🤖 Machine Learning: Tu Nuevo Superpoder",
			subtitle: "O cómo hacer que las máquinas aprendan (casi) como tú",
			type: "title",
			duration: "5 min",
			content: {
				hook: "¿Cuántos aquí han usado Netflix, Spotify o Instagram hoy?",
				reveal: "Felicitaciones, ya han sido usuarios de Machine Learning 🎉",
				examples: [
					{ app: "Netflix", ml: "Predice qué serie te va a gustar" },
					{ app: "Spotify", ml: "Crea playlists perfectas para ti" },
					{ app: "Instagram", ml: "Decide qué stories mostrarte primero" },
				],
				power_phrase:
					'Hoy aprenderán cómo funcionan estos "cerebros artificiales" que ya controlan parte de sus vidas',
			},
			notes: "Empezar pidiendo que levanten la mano. Crear conexión inmediata.",
		},

		// SLIDE 2: ¿QUÉ ES ML?
		{
			id: "what_is_ml",
			title: "🧠 ¿Qué es Machine Learning?",
			subtitle: "Spoiler: No es magia, es matemática cool",
			type: "concept",
			duration: "7 min",
			content: {
				definition:
					"Machine Learning = Enseñar a las computadoras a aprender de la experiencia",
				title: "🚴 Como aprender a andar en bici",
				steps: [
					"Te caes muchas veces (datos)",
					"Aprendes qué funciona (patrones)",
					"Mejoras con la práctica (entrenamiento)",
					"Ya no piensas, solo andas (predicción)",
				],
				traditional_vs_ml: {
					traditional: {
						title: "Programación Tradicional",
						example: 'IF email contiene "príncipe nigeriano" THEN es spam',
						problem: '¿Y si dice "princesa nigeriana"? 🤔',
					},
					ml: {
						title: "Machine Learning",
						example:
							"Mostrar 1 millón de emails → La máquina aprende qué es spam",
						advantage: "Detecta CUALQUIER variación automáticamente",
					},
				},
			},
			notes: "Usar gestos para la analogía de la bici. Hacer que imaginen.",
		},

		// SLIDE 3: TIPOS DE DATOS - ETIQUETADOS VS NO ETIQUETADOS
		{
			id: "labeled_unlabeled",
			title: "🏷️ Datos Etiquetados vs No Etiquetados",
			subtitle: "La diferencia entre estudiar con o sin las respuestas",
			type: "comparison",
			duration: "8 min",
			content: {
				labeled: {
					title: "Datos Etiquetados",
					definition: "Vienen con la respuesta correcta",
					example: {
						scenario: "Fotos de perros y gatos CON etiquetas",
						data: [
							{ image: "🐕", label: "Perro" },
							{ image: "🐈", label: "Gato" },
							{ image: "🐕", label: "Perro" },
						],
					},
					real_world: "Como estudiar con un solucionario",
				},
				unlabeled: {
					title: "Datos No Etiquetados",
					definition: "Solo datos, sin respuestas",
					example: {
						scenario: "Miles de fotos sin decir qué son",
						data: [
							{ image: "🐕", label: "???" },
							{ image: "🐈", label: "???" },
							{ image: "🦜", label: "???" },
						],
					},
					real_world: "Como organizar tu música sin conocer los géneros",
				},
			},
			activity:
				"Juego rápido: mostrar emojis y que adivinen si necesitan etiquetas para diferentes tareas",
		},

		// SLIDE 4: DATOS ESTRUCTURADOS VS NO ESTRUCTURADOS
		{
			id: "structured_unstructured",
			title: "📊 Datos Estructurados vs No Estructurados",
			subtitle: "Excel vs El Caos del Mundo Real",
			type: "data_types",
			duration: "8 min",
			content: {
				structured: {
					title: "Datos Estructurados",
					definition: "Organizados en filas y columnas",
					examples: [
						"Notas en una planilla",
						"Lista de contactos",
						"Historial de compras",
					],
					visual: {
						headers: ["Nombre", "Edad", "Carrera", "Promedio"],
						rows: [
							["Ana", "20", "Ingeniería", "8.5"],
							["Luis", "21", "Medicina", "9.0"],
						],
					},
				},
				unstructured: {
					title: "Datos No Estructurados",
					definition: "El 80% de los datos del mundo",
					examples: [
						"📸 Fotos de Instagram",
						"🎵 Canciones de Spotify",
						"💬 Mensajes de WhatsApp",
						"🎥 Videos de TikTok",
					],
					challenge: "¿Cómo metes un meme en Excel?",
				},
				key_insight:
					"ML puede trabajar con AMBOS tipos, pero necesita diferentes estrategias",
			},
		},

		// SLIDE 5: APRENDIZAJE SUPERVISADO
		{
			id: "supervised_learning",
			title: "👨‍🏫 Aprendizaje Supervisado",
			subtitle: "Como tener un profesor particular 24/7",
			type: "learning_type",
			duration: "10 min",
			content: {
				definition: "Aprender con ejemplos y respuestas correctas",
				how_it_works: [
					"Le das ejemplos con respuestas",
					"El modelo encuentra patrones",
					"Predice respuestas para casos nuevos",
				],
				types: {
					classification: {
						title: "📦 Clasificación",
						definition: "Poner las cosas en categorías",
						examples: [
							{ task: "Email → Spam o No Spam", icon: "📧" },
							{ task: "Foto → Perro o Gato", icon: "🐾" },
							{ task: "Estudiante → Aprueba o Reprueba", icon: "📚" },
						],
					},
					regression: {
						title: "📈 Regresión",
						definition: "Predecir números continuos",
						examples: [
							{ task: "Predecir precio de casa", icon: "🏠" },
							{ task: "Estimar tiempo de llegada", icon: "🚗" },
							{ task: "Calcular nota final", icon: "💯" },
						],
					},
				},
				interactive:
					"Votación: ¿Qué tipo sería predecir cuántos likes tendrá tu próxima foto?",
			},
		},

		// SLIDE 6: APRENDIZAJE NO SUPERVISADO
		{
			id: "unsupervised_learning",
			title: "🔍 Aprendizaje No Supervisado",
			subtitle: "Cuando la máquina es detective",
			type: "learning_type",
			duration: "10 min",
			content: {
				definition: "Encontrar patrones ocultos SIN respuestas previas",
				analogy: "Como organizar tu closet sin que nadie te diga cómo",
				techniques: {
					clustering: {
						title: "🎯 Clustering",
						definition: "Agrupar cosas similares",
						example: {
							scenario: "Spotify agrupando usuarios por gustos musicales",
							groups: [
								{ name: "Reggaetoneros", members: ["👤", "👤", "👤"] },
								{ name: "Metaleros", members: ["🤘", "🤘", "🤘"] },
								{ name: "K-popers", members: ["💜", "💜", "💜"] },
							],
						},
						real_use: "Marketing: encontrar tipos de clientes",
					},
					dimensionality: {
						title: "📐 Reducción de Dimensionalidad",
						definition: "Simplificar datos complejos",
						analogy: "Como hacer un resumen de un libro de 500 páginas",
						example: "Comprimir miles de características en 2-3 principales",
						visual: "100 variables → 3 variables principales",
					},
				},
			},
		},

		// SLIDE 7: APRENDIZAJE POR REFUERZO
		{
			id: "reinforcement_learning",
			title: "🎮 Aprendizaje por Refuerzo",
			subtitle: "Como entrenar a tu Pokémon (o a un robot)",
			type: "learning_type",
			duration: "8 min",
			content: {
				definition: "Aprender por prueba y error con recompensas",
				steps: [
					"Intenta algo → Acción",
					"Recibe feedback → Recompensa o Castigo",
					"Ajusta estrategia → Aprendizaje",
					"Repite → Mejora continua",
				],
				examples: [
					{
						title: "AlphaGo",
						description: "Aprendió a jugar Go mejor que humanos",
						reward: "Ganar partidas",
					},
					{
						title: "Autos autónomos",
						description: "Aprenden a manejar",
						reward: "Llegar sin chocar",
					},
					{
						title: "Recomendaciones YouTube",
						description: "Aprende qué mostrarte",
						reward: "Que veas más videos",
					},
				],
				game: 'Mini-juego: Entrenar a un "robot" (voluntario) a encontrar objeto con aplausos',
			},
		},

		// SLIDE 8: ALGORITMOS DE CLASIFICACIÓN
		{
			id: "classification_algorithms",
			title: "🎯 Algoritmos de Clasificación",
			subtitle: "Las diferentes formas de separar perros de gatos",
			type: "algorithms",
			duration: "10 min",
			content: {
				intro: "¿Cómo decide una máquina si algo es A o B?",
				algorithms: [
					{
						name: "Árbol de Decisión",
						analogy: "Como un juego de 20 preguntas",
						example: "¿Tiene pelo? → ¿Ladra? → Es perro",
						pros: "Fácil de entender",
						cons: "Puede ser muy simplista",
					},
					{
						name: "K-Vecinos Cercanos",
						analogy: "Dime con quién andas...",
						example:
							"Si tus 5 amigos más cercanos son gamers, probablemente tú también",
						pros: "Simple y efectivo",
						cons: "Lento con muchos datos",
					},
					{
						name: "Redes Neuronales",
						analogy: "Imita el cerebro humano",
						example: "Reconoce caras como tu cerebro",
						pros: "Muy poderoso",
						cons: "Necesita MUCHOS datos",
					},
				],
				activity:
					"Crear un árbol de decisión humano para clasificar estudiantes por carrera",
			},
		},

		// SLIDE 9: ALGORITMOS DE REGRESIÓN
		{
			id: "regression_algorithms",
			title: "📈 Algoritmos de Regresión",
			subtitle: "Predecir números como un adivino matemático",
			type: "algorithms",
			duration: "8 min",
			content: {
				intro: "¿Cómo predice cuánto costará algo o cuánto durará?",
				simple_example: {
					title: "Regresión Lineal",
					scenario: "Predecir nota final según horas de estudio",
					visual: {
						x_axis: "Horas de estudio",
						y_axis: "Nota esperada",
						insight: "Encuentra la mejor línea que conecta los puntos",
					},
				},
				real_examples: [
					{
						case: "Uber",
						predicts: "Precio del viaje",
						based_on: "Distancia, hora, demanda",
					},
					{
						case: "Universidad",
						predicts: "Deserción estudiantil",
						based_on: "Asistencia, notas, situación económica",
					},
				],
				key_message:
					"No es magia, es encontrar relaciones matemáticas en los datos",
			},
		},

		// SLIDE 10: CLUSTERING EN ACCIÓN
		{
			id: "clustering_action",
			title: "🎨 Clustering en Tu Vida Diaria",
			subtitle: "Cómo las apps te agrupan sin que lo sepas",
			type: "application",
			duration: "8 min",
			content: {
				definition_recap: "Agrupar elementos similares automáticamente",
				real_world_examples: [
					{
						company: "Netflix",
						groups: ["Maratonistas", "Casuales", "Niños", "Cinéfilos"],
						benefit: "Mejor contenido para cada grupo",
					},
					{
						company: "Banco",
						groups: ["Ahorradores", "Gastadores", "Inversores", "Estudiantes"],
						benefit: "Productos financieros personalizados",
					},
					{
						company: "Universidad",
						groups: ["Matutinos", "Nocturnos", "Intensivos", "Relajados"],
						benefit: "Horarios optimizados",
					},
				],
				interactive_exercise: {
					title: "Clustering Humano",
					activity:
						"Agruparse por: género musical favorito, horario de estudio, red social preferida",
					insight:
						"El clustering encuentra estos grupos automáticamente en datos",
				},
			},
		},

		// SLIDE 11: APLICACIONES PRÁCTICAS
		{
			id: "practical_applications",
			title: "💡 ML en Tu Carrera (Sea Cual Sea)",
			subtitle: "No solo para ingenieros",
			type: "careers",
			duration: "10 min",
			content: {
				careers: [
					{
						field: "Medicina",
						applications: [
							"Diagnóstico por imágenes",
							"Predicción de epidemias",
							"Medicina personalizada",
						],
						example: "IA detecta cáncer mejor que radiólogos",
					},
					{
						field: "Psicología",
						applications: [
							"Detectar depresión en redes sociales",
							"Terapia con chatbots",
							"Análisis de comportamiento",
						],
						example: "Apps que predicen crisis de ansiedad",
					},
					{
						field: "Marketing",
						applications: [
							"Segmentación de clientes",
							"Predicción de ventas",
							"Optimización de campañas",
						],
						example: "Ads que aparecen justo cuando los necesitas",
					},
					{
						field: "Derecho",
						applications: [
							"Análisis de contratos",
							"Predicción de sentencias",
							"Investigación legal",
						],
						example: "IA que encuentra precedentes en segundos",
					},
					{
						field: "Arte/Diseño",
						applications: [
							"Generación de ideas",
							"Análisis de tendencias",
							"Personalización de experiencias",
						],
						example: "DALL-E, Midjourney creando arte",
					},
				],
				message: "ML no reemplaza tu carrera, la potencia 🚀",
			},
		},

		// SLIDE 12: MANOS A LA OBRA
		{
			id: "hands_on",
			title: "🛠️ Tu Primer Proyecto de ML",
			subtitle: "Más fácil de lo que piensas",
			type: "practical",
			duration: "10 min",
			content: {
				no_code_tools: [
					{
						tool: "Google Teachable Machine",
						what: "Crea modelos con tu webcam",
						time: "10 minutos",
						example: "Reconocer gestos de manos",
					},
					{
						tool: "Orange",
						what: "ML visual sin código",
						time: "30 minutos",
						example: "Predecir deserción estudiantil",
					},
					{
						tool: "AWS SageMaker Canvas",
						what: "ML profesional sin código",
						time: "1 hora",
						example: "Predecir ventas de negocio",
					},
				],
				starter_projects: [
					"Clasificador de memes buenos/malos",
					"Predictor de likes en Instagram",
					"Detector de estado de ánimo por música",
					"Recomendador de lugares para estudiar",
				],
				challenge:
					"Reto 7 días: Crear un modelo que resuelva un problema de tu universidad",
			},
		},

		// SLIDE 13: ÉTICA Y FUTURO
		{
			id: "ethics_future",
			title: "⚖️ El Poder y la Responsabilidad",
			subtitle: "Con gran ML viene gran responsabilidad",
			type: "reflection",
			duration: "8 min",
			content: {
				ethical_concerns: [
					{
						issue: "Sesgo algorítmico",
						example: "IA que discrimina por género/raza",
						solution: "Datos diversos y equipos inclusivos",
					},
					{
						issue: "Privacidad",
						example: "Apps que saben demasiado de ti",
						solution: "Transparencia y control de datos",
					},
					{
						issue: "Trabajos",
						example: "Automatización vs empleo",
						solution: "Adaptación y nuevas habilidades",
					},
				],
				your_role: [
					"Ser críticos con la tecnología",
					"Aprender para no quedarse atrás",
					"Usar ML para resolver problemas reales",
					"Construir un futuro más justo",
				],
				quote:
					'"La IA no es buena ni mala, depende de cómo la usemos" - Ustedes decidirán',
			},
		},

		// SLIDE 14: CIERRE Y ACCIÓN
		{
			id: "closing",
			title: "🚀 ¿Y Ahora Qué?",
			subtitle: "Tu journey en ML empieza HOY",
			type: "closing",
			duration: "5 min",
			content: {
				recap: [
					"ML es enseñar a las máquinas a aprender",
					"Hay diferentes tipos para diferentes problemas",
					"No necesitas ser programador para empezar",
					"Aplica a CUALQUIER carrera",
				],
				immediate_actions: [
					{ today: 'Googlear "Teachable Machine" y jugar 10 min' },
					{ this_week: "Identificar 3 problemas que ML podría resolver" },
					{ this_month: "Crear tu primer modelo sin código" },
					{ this_year: "Aplicar ML en un proyecto real" },
				],
				resources: {
					learn: ["Coursera ML para todos", "YouTube: 3Blue1Brown", "Fast.ai"],
					practice: ["Kaggle Learn", "Google Colab", "Papers with Code"],
					community: [
						"Discord servers",
						"Reddit r/MachineLearning",
						"Meetups locales",
					],
				},
				final_message:
					"El futuro no es de los que saben programar. Es de los que entienden cómo usar la tecnología para resolver problemas. Ese futuro empieza hoy, con ustedes.",
				call_to_action:
					"¿Quién se anima a crear su primer modelo esta semana? 🙋‍♀️🙋‍♂️",
			},
		},
	];

	// Usar el hook personalizado para navegación
	const navigation = useSlideNavigation(slides.length, (newSlide) => {
		console.log(
			`Navegando al slide ${newSlide + 1}: ${slides[newSlide].title}`,
		);
	});

	// Auto-play functionality
	useEffect(() => {
		let interval = undefined;
		if (isAutoPlay) {
			interval = setInterval(() => {
				navigation.setTimer((prev) => prev + 1);
				// Auto avanzar al siguiente slide cada 30 segundos si está en auto-play
				if (navigation.timer > 0 && navigation.timer % 30 === 0) {
					navigation.nextSlide();
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isAutoPlay, navigation]);

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	const getCurrentSlide = () => slides[navigation.currentSlide];
	const hideNotes = true;

	const renderSlideContent = () => {
		const slide = getCurrentSlide();

		switch (slide?.type) {
			case "title":
				return (
					<div className="text-center space-y-8">
						<div className="space-y-4">
							<h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								{slide?.title}
							</h1>
							<p className="text-2xl text-gray-600">{slide?.subtitle}</p>
						</div>

						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
							<h3 className="text-2xl font-bold text-orange-600 mb-4">
								{slide?.content?.hook}
							</h3>
							<p className="text-xl text-orange-700 mb-6">
								{slide?.content?.reveal}
							</p>
						</div>

						<div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
							<p className="text-xl font-semibold text-purple-700">
								{slide?.content?.power_phrase}
							</p>
						</div>
					</div>
				);

			case "concept":
				return (
					<div className="space-y-8">
						<div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
							<h3 className="text-3xl font-bold text-indigo-600 mb-4">
								{slide?.content?.definition}
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
								<div className="space-y-3">
									{slide.content.steps?.map((step, idx) => (
										<div key={idx} className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
												{idx + 1}
											</div>
											<p className="text-green-700">{String(step) || ""}</p>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-4">
								<div className="bg-red-50 p-6 rounded-2xl">
									<h4 className="text-lg font-bold text-red-600 mb-3">
										{slide?.content?.traditional_vs_ml?.traditional.title}
									</h4>
									<p className="text-red-700 mb-2">
										{slide?.content?.traditional_vs_ml?.traditional.example}
									</p>
									<p className="text-red-600 font-medium">
										{slide?.content?.traditional_vs_ml?.traditional.problem}
									</p>
								</div>

								<div className="bg-blue-50 p-6 rounded-2xl">
									<h4 className="text-lg font-bold text-blue-600 mb-3">
										{slide?.content?.traditional_vs_ml?.ml.title}
									</h4>
									<p className="text-blue-700 mb-2">
										{slide?.content?.traditional_vs_ml?.ml.example}
									</p>
									<p className="text-blue-600 font-medium">
										{slide?.content?.traditional_vs_ml?.ml.advantage}
									</p>
								</div>
							</div>
						</div>
					</div>
				);

			case "comparison":
				return (
					<div className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
								<h3 className="text-2xl font-bold text-green-600 mb-4">
									{slide?.content?.labeled?.title}
								</h3>
								<p className="text-green-700 mb-4">
									{slide?.content?.labeled?.definition}
								</p>
								<div className="bg-white p-4 rounded-lg mb-4">
									<p className="font-bold text-gray-700 mb-3">
										{slide?.content?.labeled?.example?.scenario}
									</p>
									<div className="space-y-2">
										{slide?.content?.labeled?.example?.data?.map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center justify-between bg-green-50 p-2 rounded"
												>
													<span className="text-2xl">{item.image}</span>
													<span className="font-bold text-green-600">
														→ {item.label}
													</span>
												</div>
											),
										)}
									</div>
								</div>
								<p className="text-green-600 font-medium">
									{slide?.content?.labeled?.real_world}
								</p>
							</div>

							<div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
								<h3 className="text-2xl font-bold text-orange-600 mb-4">
									{slide?.content?.unlabeled?.title}
								</h3>
								<p className="text-orange-700 mb-4">
									{slide?.content?.unlabeled?.definition}
								</p>
								<div className="bg-white p-4 rounded-lg mb-4">
									<p className="font-bold text-gray-700 mb-3">
										{slide?.content?.unlabeled?.example?.scenario}
									</p>
									<div className="space-y-2">
										{slide?.content?.unlabeled?.example?.data?.map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center justify-between bg-orange-50 p-2 rounded"
												>
													<span className="text-2xl">{item.image}</span>
													<span className="font-bold text-orange-600">
														→ {item.label}
													</span>
												</div>
											),
										)}
									</div>
								</div>
								<p className="text-orange-600 font-medium">
									{slide?.content?.unlabeled?.real_world}
								</p>
							</div>
						</div>

						{slide?.activity && (
							<div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
								<p className="text-lg text-purple-700 font-medium">
									🎮 Actividad: {slide?.activity}
								</p>
							</div>
						)}
					</div>
				);

			case "data_types":
				return (
					<div className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
								<h3 className="text-2xl font-bold text-blue-600 mb-4">
									{slide?.content?.structured?.title}
								</h3>
								<p className="text-blue-700 mb-4">
									{slide?.content?.structured?.definition}
								</p>

								<div className="bg-white p-4 rounded-lg mb-4 overflow-x-auto">
									<table className="w-full">
										<thead>
											<tr className="border-b">
												{slide?.content?.structured?.visual.headers?.map(
													(header, idx) => (
														<th
															key={idx}
															className="text-left p-2 font-bold text-gray-700"
														>
															{header}
														</th>
													),
												)}
											</tr>
										</thead>
										<tbody>
											{slide?.content?.structured?.visual.rows?.map(
												(row, idx) => (
													<tr key={idx} className="border-b">
														{row?.map((cell, cellIdx) => (
															<td key={cellIdx} className="p-2 text-gray-600">
																{cell}
															</td>
														))}
													</tr>
												),
											)}
										</tbody>
									</table>
								</div>

								<div className="space-y-2">
									{slide?.content?.structured?.examples?.map((example, idx) => (
										<div
											key={idx}
											className="bg-blue-100 p-2 rounded text-blue-700"
										>
											• {example}
										</div>
									))}
								</div>
							</div>

							<div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
								<h3 className="text-2xl font-bold text-purple-600 mb-4">
									{slide?.content?.unstructured?.title}
								</h3>
								<p className="text-purple-700 mb-4">
									{slide?.content?.unstructured?.definition}
								</p>

								<div className="grid grid-cols-2 gap-3 mb-4">
									{slide?.content?.unstructured?.examples?.map(
										(example, idx) => (
											<div
												key={idx}
												className="bg-white p-3 rounded-lg text-center"
											>
												<p className="text-lg">{example}</p>
											</div>
										),
									)}
								</div>

								<div className="bg-purple-100 p-4 rounded-lg">
									<p className="text-purple-800 font-medium">
										{slide?.content?.unstructured?.challenge}
									</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl text-center">
							<p className="text-xl font-bold text-orange-600">
								{slide?.content?.key_insight}
							</p>
						</div>
					</div>
				);

			case "learning_type":
				return (
					<div className="space-y-8">
						<div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl">
							<h3 className="text-2xl font-bold text-indigo-600 mb-3">
								{slide?.content?.definition}
							</h3>
							{slide?.content?.analogy && (
								<p className="text-indigo-700">
									{slide?.content?.analogy || ""}
								</p>
							)}
						</div>

						{slide?.content?.how_it_works && (
							<div className="bg-white p-6 rounded-2xl shadow-lg">
								<h4 className="text-xl font-bold text-gray-800 mb-4">
									Cómo Funciona:
								</h4>
								<div className="space-y-3">
									{slide?.content?.how_it_works?.map((step, idx) => (
										<div key={idx} className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
												{idx + 1}
											</div>
											<p className="text-gray-700">{step}</p>
										</div>
									))}
								</div>
							</div>
						)}

						{slide?.content?.types && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
									<h4 className="text-xl font-bold text-blue-600 mb-3">
										{slide?.content?.types.classification.title}
									</h4>
									<p className="text-blue-700 mb-4">
										{slide?.content?.types.classification.definition}
									</p>
									<div className="space-y-2">
										{slide?.content?.types.classification.examples?.map(
											(ex, idx) => (
												<div
													key={idx}
													className="bg-white p-3 rounded-lg flex items-center space-x-3"
												>
													<span className="text-2xl">{ex.icon}</span>
													<span className="text-gray-700">{ex.task}</span>
												</div>
											),
										)}
									</div>
								</div>

								<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
									<h4 className="text-xl font-bold text-green-600 mb-3">
										{slide?.content?.types.regression.title}
									</h4>
									<p className="text-green-700 mb-4">
										{slide?.content?.types.regression.definition}
									</p>
									<div className="space-y-2">
										{slide?.content?.types.regression.examples?.map(
											(ex, idx) => (
												<div
													key={idx}
													className="bg-white p-3 rounded-lg flex items-center space-x-3"
												>
													<span className="text-2xl">{ex.icon}</span>
													<span className="text-gray-700">{ex.task}</span>
												</div>
											),
										)}
									</div>
								</div>
							</div>
						)}

						{slide?.content?.techniques && (
							<div className="space-y-6">
								<div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
									<h4 className="text-xl font-bold text-orange-600 mb-3">
										{slide?.content?.techniques.clustering.title}
									</h4>
									<p className="text-orange-700 mb-4">
										{slide?.content?.techniques.clustering.definition}
									</p>
									<div className="bg-white p-4 rounded-lg mb-3">
										<p className="font-bold text-gray-700 mb-3">
											{slide?.content?.techniques.clustering.example?.scenario}
										</p>
										<div className="grid grid-cols-3 gap-3">
											{slide?.content?.techniques.clustering.example?.groups?.map(
												(group, idx) => (
													<div
														key={idx}
														className="bg-orange-50 p-3 rounded text-center"
													>
														<p className="font-bold text-orange-600 mb-2">
															{group.name}
														</p>
														<div className="flex justify-center space-x-1">
															{group.members?.map((member, mIdx) => (
																<span key={mIdx}>{member}</span>
															))}
														</div>
													</div>
												),
											)}
										</div>
									</div>
									<p className="text-orange-600 font-medium">
										{slide?.content?.techniques.clustering.real_use}
									</p>
								</div>

								<div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
									<h4 className="text-xl font-bold text-purple-600 mb-3">
										{slide?.content?.techniques.dimensionality.title}
									</h4>
									<p className="text-purple-700 mb-3">
										{slide?.content?.techniques.dimensionality.definition}
									</p>
									<p className="text-purple-600 mb-3">
										{slide?.content?.techniques.dimensionality.analogy}
									</p>
									<div className="bg-white p-4 rounded-lg">
										<p className="text-gray-700 mb-2">
											{slide?.content?.techniques.dimensionality.example}
										</p>
										<p className="font-mono text-purple-600">
											{slide?.content?.techniques.dimensionality.visual}
										</p>
									</div>
								</div>
							</div>
						)}

						{slide?.content?.examples && (
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{slide?.content?.examples?.map((example, idx) => (
									<div
										key={idx}
										className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl"
									>
										<h5 className="font-bold text-gray-800 mb-2">
											{'title' in example ? example.title : example.app}
										</h5>
										{'description' in example && <p className="text-gray-600 mb-2">{example.description}</p>}
										{'reward' in example && (
											<p className="text-sm text-green-600 font-medium">
												🎯 {example.reward}
											</p>
										)}
										{'ml' in example && <p className="text-gray-600">{example.ml}</p>}
									</div>
								))}
							</div>
						)}

						{slide?.content?.interactive && (
							<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
								<p className="text-lg text-orange-700 font-medium">
									🎯 {slide?.content?.interactive}
								</p>
							</div>
						)}

						{slide?.content?.game && (
							<div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
								<p className="text-lg text-purple-700 font-medium">
									🎮 {slide?.content?.game}
								</p>
							</div>
						)}
					</div>
				);

			case "algorithms":
				return (
					<div className="space-y-8">
						<div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
							<h3 className="text-2xl font-bold text-purple-600">
								{slide?.content?.intro}
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{slide?.content?.algorithms?.map((algo, idx) => (
								<div
									key={idx}
									className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200"
								>
									<h4 className="text-xl font-bold text-gray-800 mb-3">
										{algo.name}
									</h4>
									<div className="space-y-3">
										<div className="bg-blue-50 p-3 rounded">
											<p className="text-sm font-bold text-blue-600">
												Analogía:
											</p>
											<p className="text-blue-700">{algo.analogy}</p>
										</div>
										<div className="bg-purple-50 p-3 rounded">
											<p className="text-sm font-bold text-purple-600">
												Ejemplo:
											</p>
											<p className="text-purple-700">{algo.example}</p>
										</div>
										<div className="grid grid-cols-2 gap-2">
											<div className="bg-green-50 p-2 rounded">
												<p className="text-xs font-bold text-green-600">
													✅ Pros
												</p>
												<p className="text-xs text-green-700">{algo.pros}</p>
											</div>
											<div className="bg-red-50 p-2 rounded">
												<p className="text-xs font-bold text-red-600">
													❌ Cons
												</p>
												<p className="text-xs text-red-700">{algo.cons}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{slide?.content?.simple_example && (
							<div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
								<h4 className="text-xl font-bold text-green-600 mb-3">
									{slide?.content?.simple_example?.title}
								</h4>
								<p className="text-green-700 mb-4">
									{slide?.content?.simple_example?.scenario}
								</p>
								<div className="bg-white p-4 rounded-lg">
									<div className="flex justify-between mb-2">
										<span className="font-bold text-gray-600">
											X: {slide?.content?.simple_example?.visual.x_axis}
										</span>
										<span className="font-bold text-gray-600">
											Y: {slide?.content?.simple_example?.visual.y_axis}
										</span>
									</div>
									<p className="text-blue-600">
										{slide?.content?.simple_example?.visual.insight}
									</p>
								</div>
							</div>
						)}

						{slide?.content?.real_examples && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{slide?.content?.real_examples?.map((ex, idx) => (
									<div
										key={idx}
										className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl"
									>
										<h5 className="font-bold text-orange-600">{ex.case}</h5>
										<p className="text-orange-700">Predice: {ex.predicts}</p>
										<p className="text-sm text-orange-600">
											Basado en: {ex.based_on}
										</p>
									</div>
								))}
							</div>
						)}

						{slide?.content?.activity && (
							<div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
								<p className="text-lg text-purple-700 font-medium">
									🎯 Actividad: {slide?.content?.activity}
								</p>
							</div>
						)}

						{slide?.content?.key_message && (
							<div className="text-center bg-yellow-50 p-6 rounded-2xl">
								<p className="text-xl font-bold text-yellow-700">
									{slide?.content?.key_message}
								</p>
							</div>
						)}
					</div>
				);

			case "application":
				return (
					<div className="space-y-8">
						<div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
							<h3 className="text-xl font-bold text-purple-600 mb-2">
								Recordemos:
							</h3>
							<p className="text-purple-700">
								{slide?.content?.definition_recap}
							</p>
						</div>

						<div className="space-y-4">
							{slide?.content?.real_world_examples?.map((example, idx) => (
								<div
									key={idx}
									className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500"
								>
									<h4 className="text-xl font-bold text-gray-800 mb-3">
										{example?.company}
									</h4>
									<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
										{example?.groups?.map((group, gIdx) => (
											<div
												key={gIdx}
												className="bg-purple-50 p-2 rounded text-center"
											>
												<span className="text-purple-700 font-medium">
													{group}
												</span>
											</div>
										))}
									</div>
									<p className="text-green-600 font-medium">
										✅ {example?.benefit}
									</p>
								</div>
							))}
						</div>

						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
							<h4 className="text-2xl font-bold text-orange-600 mb-4">
								{slide?.content?.interactive_exercise?.title}
							</h4>
							<p className="text-lg text-orange-700 mb-4">
								{slide?.content?.interactive_exercise?.activity}
							</p>
							<p className="text-orange-600 font-medium">
								💡 {slide?.content?.interactive_exercise?.insight}
							</p>
						</div>
					</div>
				);

			case "careers":
				return (
					<div className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{slide?.content?.careers?.map((career, idx) => (
								<div
									key={idx}
									className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-t-4 border-purple-500"
								>
									<h4 className="text-xl font-bold text-gray-800 mb-3">
										{career.field}
									</h4>
									<div className="space-y-2 mb-4">
										{career.applications?.map((app, aIdx) => (
											<div
												key={aIdx}
												className="bg-purple-50 p-2 rounded text-sm text-purple-700"
											>
												• {app}
											</div>
										))}
									</div>
									<div className="bg-green-50 p-3 rounded">
										<p className="text-sm text-green-700 font-medium">
											💡 {career.example}
										</p>
									</div>
								</div>
							))}
						</div>

						<div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
							<p className="text-2xl font-bold text-purple-600">
								{slide?.content?.message}
							</p>
						</div>
					</div>
				);

			case "practical":
				return (
					<div className="space-y-8">
						<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
							<h3 className="text-2xl font-bold text-green-600 mb-6">
								🛠️ Herramientas Sin Código
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{slide?.content?.no_code_tools?.map((tool, idx) => (
									<div key={idx} className="bg-white p-4 rounded-xl">
										<h5 className="font-bold text-gray-800 mb-2">
											{tool.tool}
										</h5>
										<p className="text-gray-600 mb-2">{tool.what}</p>
										<p className="text-green-600 font-medium mb-2">
											⏱️ {tool.time}
										</p>
										<p className="text-sm text-gray-500">Ej: {tool.example}</p>
									</div>
								))}
							</div>
						</div>

						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
							<h4 className="text-xl font-bold text-orange-600 mb-4">
								🚀 Ideas para Empezar
							</h4>
							<div className="grid grid-cols-2 gap-3">
								{slide?.content?.starter_projects?.map((project, idx) => (
									<div
										key={idx}
										className="bg-white p-3 rounded-lg text-orange-700"
									>
										• {project}
									</div>
								))}
							</div>
						</div>

						<div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
							<p className="text-2xl font-bold text-purple-600">
								{slide?.content?.challenge}
							</p>
						</div>
					</div>
				);

			case "reflection":
				return (
					<div className="space-y-8">
						<div className="space-y-4">
							{slide?.content?.ethical_concerns?.map((concern, idx) => (
								<div
									key={idx}
									className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500"
								>
									<h4 className="text-xl font-bold text-red-600 mb-2">
										{concern.issue}
									</h4>
									<p className="text-gray-700 mb-2">
										Ejemplo: {concern.example}
									</p>
									<p className="text-green-600 font-medium">
										✅ Solución: {concern.solution}
									</p>
								</div>
							))}
						</div>

						<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
							<h4 className="text-xl font-bold text-purple-600 mb-4">
								Tu Rol en el Futuro:
							</h4>
							<div className="grid grid-cols-2 gap-4">
								{slide?.content?.your_role?.map((role, idx) => (
									<div
										key={idx}
										className="bg-white p-3 rounded-lg text-purple-700"
									>
										• {role}
									</div>
								))}
							</div>
						</div>

						<div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
							<p className="text-xl font-medium text-orange-700 italic">
								{slide?.content?.quote}
							</p>
						</div>
					</div>
				);

			case "closing":
				return (
					<div className="space-y-8">
						<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
							<h3 className="text-xl font-bold text-purple-600 mb-4">
								Lo que Aprendimos Hoy:
							</h3>
							<div className="grid grid-cols-2 gap-3">
								{slide?.content?.recap?.map((point, idx) => (
									<div
										key={idx}
										className="bg-white p-3 rounded-lg flex items-center space-x-2"
									>
										<div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
											✓
										</div>
										<span className="text-gray-700">{point}</span>
									</div>
								))}
							</div>
						</div>

						<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
							<h3 className="text-xl font-bold text-green-600 mb-4">
								Tu Plan de Acción:
							</h3>
							<div className="space-y-3">
								{slide?.content?.immediate_actions?.map((action, idx) => (
									<div
										key={idx}
										className="flex items-center justify-between bg-white p-3 rounded-lg"
									>
										<span className="font-bold text-gray-700">
											{Object.keys(action)[0]}:
										</span>
										<span className="text-gray-600">
											{Object.values(action)[0]}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-3 gap-4">
							{Object.entries(slide?.content?.resources || {})?.map(
								([key, value], idx) => (
									<div key={idx} className="bg-gray-50 p-4 rounded-xl">
										<h5 className="font-bold text-gray-700 mb-2 capitalize">
											{key}:
										</h5>
										<ul className="text-sm text-gray-600 space-y-1">
											{value?.map((item, iIdx) => (
												<li key={iIdx}>• {item}</li>
											))}
										</ul>
									</div>
								),
							)}
						</div>

						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
							<p className="text-xl text-orange-700 mb-6">
								{slide?.content?.final_message}
							</p>
							<p className="text-2xl font-bold text-orange-600">
								{slide?.content?.call_to_action}
							</p>
						</div>
					</div>
				);

			default:
				return (
					<div className="text-center space-y-8">
						<h1 className="text-4xl font-bold text-gray-800">{slide?.title}</h1>
						<p className="text-xl text-gray-600">{slide?.subtitle}</p>
					</div>
				);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Header Controls */}
			<div className="bg-white/95 backdrop-blur-sm p-4 shadow-lg">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<Brain className="w-8 h-8 text-purple-500" />
						<div>
							<h1 className="text-xl font-bold text-gray-800">
								Machine Learning para Universitarios
							</h1>
							<span className="text-sm text-gray-600">
								Slide {navigation.currentSlide + 1} de {slides.length}
							</span>
						</div>
					</div>

					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
							<span className="text-sm text-gray-600">Timer:</span>
							<span className="font-mono text-sm font-bold">
								{formatTime(navigation.timer)}
							</span>
						</div>

						<button
							onClick={() => setIsAutoPlay(!isAutoPlay)}
							className={`p-2 rounded-lg ${isAutoPlay ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}
						>
							{isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
						</button>

						<div className="bg-purple-100 px-3 py-1 rounded-lg">
							<span className="text-purple-700 font-medium">
								{getCurrentSlide().duration}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto p-8">
				<div className="bg-white rounded-3xl shadow-2xl min-h-[600px] p-8">
					{/* Slide Header */}
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-800 mb-2">
							{getCurrentSlide().title}
						</h1>
						<p className="text-xl text-gray-600">
							{getCurrentSlide().subtitle}
						</p>
					</div>

					{/* Slide Content */}
					<div className="mb-8">{renderSlideContent()}</div>

					{/* Speaker Notes */}
					{getCurrentSlide().notes && !hideNotes && (
						<div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
							<h4 className="font-bold text-blue-800 mb-2">
								📝 Notas del Presentador:
							</h4>
							<p className="text-blue-700 text-sm">{getCurrentSlide().notes}</p>
						</div>
					)}
				</div>
			</div>

			{/* Navigation */}
			<div className="bg-white/95 backdrop-blur-sm p-4">
				<div className="max-w-7xl mx-auto">
					{/* Progress Bar */}
					<div className="w-full bg-gray-200 rounded-full h-2 mb-4">
						<div
							className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
							style={{
								width: `${((navigation.currentSlide + 1) / slides.length) * 100}%`,
							}}
						/>
					</div>

					{/* Navigation Controls */}
					<div className="flex items-center justify-between">
						<button
							onClick={navigation.prevSlide}
							disabled={navigation.currentSlide === 0}
							className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
						>
							<ChevronLeft size={20} />
							<span>Anterior</span>
						</button>

						{/* Slide Indicators */}
						<div className="flex space-x-2 overflow-x-auto max-w-md">
							{slides?.map((slide, index) => (
								<button
									key={slide?.id}
									onClick={() => navigation.goToSlide(index)}
									className={`w-3 h-3 rounded-full transition-all ${
										navigation.currentSlide === index
											? "bg-purple-500 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									title={`Slide ${index + 1}: ${slide?.title}`}
								/>
							))}
						</div>

						<button
							onClick={navigation.nextSlide}
							disabled={navigation.currentSlide === slides.length - 1}
							className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
						>
							<span>Siguiente</span>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MLBasicsPresentation;
