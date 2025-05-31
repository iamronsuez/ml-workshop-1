"use client";

import React, { useState, useEffect } from "react";

const MetricsGlossary = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeFilter, setActiveFilter] = useState("all");

	const metrics = [
		{
			id: "mape",
			name: "MAPE",
			subtitle: "Mean Absolute Percentage Error",
			category: ["error", "forecast"],
			icon: "📊",
			description:
				"¿Qué mide? El porcentaje promedio de error en tus predicciones.",
			analogy:
				'Si dices "llegaré en 10 minutos" pero llegas en 15, tu MAPE es 50%. Si siempre te equivocas así, tienes MAPE = 50%.',
			example:
				"Pizza predice vender 100 pizzas, vende 85. Error = 15%. Si esto pasa consistentemente, MAPE = 15%.",
			scoreWidth: 100,
			scoreGradient: "from-green-500 via-orange-500 to-red-500",
			rangeText: "Excelente: 0-10% | Malo: 50%+",
			interpretation:
				'MAPE 15% = "Me equivoco 15 centavos por cada peso". Para bancos de alimentos: ¡Excelente! Para medicina: Tal vez necesites mejorar.',
			bgColor: "from-orange-500 to-orange-600",
		},
		{
			id: "precision",
			name: "Precisión",
			subtitle: "Precision / Accuracy",
			category: ["precision", "classification"],
			icon: "🎯",
			description:
				"¿Qué mide? De todas las predicciones positivas que hiciste, ¿cuántas fueron correctas?",
			analogy:
				'Eres arquero. Disparas 10 flechas, dices "todas darán en el centro". 8 dan en el centro. Tu precisión = 80%.',
			example:
				"Banco predice: 100 personas pagarán su préstamo. Realidad: Solo 85 pagaron. Precisión = 85% ✅",
			scoreWidth: 85,
			scoreGradient: "from-red-500 via-orange-500 to-green-500",
			rangeText: "Malo: 50% | Perfecto: 100%",
			interpretation:
				'Precisión 85% = "Cuando digo SÍ, tengo razón 85 de cada 100 veces". ¡Mejor que adivinar al azar!',
			bgColor: "from-green-500 to-green-600",
		},
		{
			id: "rmse",
			name: "RMSE",
			subtitle: "Root Mean Square Error",
			category: ["error", "forecast"],
			icon: "📐",
			description:
				'¿Qué mide? El error "promedio" entre tus predicciones y la realidad, pero castigando más los errores grandes.',
			analogy:
				"Predices alturas de estudiantes. Te equivocas por 5cm, 3cm, 20cm. RMSE castiga más el error de 20cm que los pequeños.",
			example:
				"Cooperativa eléctrica predice consumo por hora. RMSE = 0.8 kW significa error promedio de ~0.8 kW por hora.",
			scoreWidth: 30,
			scoreGradient: "from-green-500 via-orange-500 to-red-500",
			rangeText: "Mejor: Más bajo | Peor: Más alto",
			interpretation:
				"RMSE se mide en las mismas unidades que tu variable objetivo. Más bajo = mejor modelo.",
			bgColor: "from-orange-500 to-red-600",
		},
		{
			id: "recall",
			name: "Recall",
			subtitle: "Sensitividad / Cobertura",
			category: ["precision", "classification"],
			icon: "🔍",
			description:
				"¿Qué mide? De todos los casos positivos reales, ¿cuántos detectaste?",
			analogy:
				"Eres detective buscando 100 criminales en la ciudad. Encuentras 90. Tu recall = 90%. (10 se escaparon)",
			example:
				"Hospital: 100 pacientes realmente tienen cáncer. IA detecta 95. Recall = 95%. 5 pacientes no fueron detectados ⚠️",
			scoreWidth: 95,
			scoreGradient: "from-red-500 via-orange-500 to-green-500",
			rangeText: "Peligroso: 70% | Excelente: 95%+",
			interpretation:
				'Alto recall = "No se me escapa nada importante". Crítico en medicina, seguridad, fraude.',
			bgColor: "from-blue-500 to-blue-600",
		},
		{
			id: "f1",
			name: "F1 Score",
			subtitle: "Balance Precision + Recall",
			category: ["precision", "classification"],
			icon: "⚖️",
			description:
				"¿Qué mide? El equilibrio perfecto entre Precisión y Recall. Una sola métrica que resume ambas.",
			analogy:
				"Eres maestro. Precisión = qué tan buenas son tus calificaciones. Recall = qué tan bien evalúas a TODOS los estudiantes. F1 = Tu puntuación balanceada como maestro.",
			example:
				"Email spam: Precisión 90% (pocos falsos), Recall 80% (algunos se escapan). F1 Score = 0.85 = Balance bueno ✅",
			scoreWidth: 85,
			scoreGradient: "from-red-500 via-orange-500 to-green-500",
			rangeText: "Malo: 0.5 | Perfecto: 1.0",
			interpretation:
				'F1 Score 0.85 = "Excelente balance". Cuando Precisión y Recall son importantes por igual.',
			bgColor: "from-blue-500 to-blue-600",
		},
		{
			id: "wape",
			name: "WAPE",
			subtitle: "Weighted Absolute Percentage Error",
			category: ["error", "forecast"],
			icon: "📊",
			description:
				"¿Qué mide? Como MAPE, pero da más importancia a volúmenes grandes que pequeños.",
			analogy:
				"Predices ventas: 1000 notebooks (error 10%) vs 10 borradores (error 50%). WAPE se preocupa más por el error en notebooks.",
			example:
				"Supermercado: Error 20% en chicles, error 5% en televisores. WAPE enfatiza más el error en televisores (mayor impacto económico).",
			scoreWidth: 70,
			scoreGradient: "from-green-500 via-orange-500 to-red-500",
			rangeText: "Excelente: 0-15% | Problema: 30%+",
			interpretation:
				'WAPE es más "justa" que MAPE cuando hay diferencias grandes en volúmenes. Mejor para retail, inventarios, finanzas.',
			bgColor: "from-purple-500 to-purple-600",
		},
		{
			id: "mase",
			name: "MASE",
			subtitle: "Mean Absolute Scaled Error",
			category: ["error", "forecast"],
			icon: "📈",
			description:
				"¿Qué mide? ¿Tu modelo es mejor que el método más simple posible?",
			analogy:
				'Competencia de predicción vs "método ingenuo" (copiar el valor de ayer). MASE < 1 = Le ganas. MASE > 1 = Mejor usar método simple.',
			example:
				'Clima: Método simple = "mañana será igual que hoy". Tu IA: MASE 0.8 = ¡Tu modelo es 20% mejor! ✅',
			scoreWidth: 65,
			scoreGradient: "from-green-500 via-yellow-500 to-red-500",
			rangeText: "Peor que básico: 1.5+ | Excelente: <0.8",
			interpretation:
				'MASE 1.3 = "Tu modelo es 30% peor que copiar el valor anterior". ¡Tal vez necesites más datos o mejor configuración!',
			bgColor: "from-purple-500 to-purple-600",
		},
		{
			id: "wql",
			name: "wQL",
			subtitle: "Weighted Quantile Loss",
			category: ["precision", "forecast"],
			icon: "🎯",
			description:
				"¿Qué mide? Qué tan buenas son tus predicciones con rangos (P10, P50, P90).",
			analogy:
				'Predicción clima: "50% chance lluvia ligera, 10% chance tormenta". wQL mide si tus rangos de probabilidad son realistas.',
			example:
				'Amazon predice: "Tu paquete llegará entre 2-5 días". wQL mide si esos rangos son precisos históricamente.',
			scoreWidth: 20,
			scoreGradient: "from-green-500 via-orange-500 to-red-500",
			rangeText: "Perfecto: 0.0 | Problema: 0.5+",
			interpretation:
				'wQL 0.1 = "Mis rangos de confianza son muy buenos". Útil cuando necesitas probabilidades, no solo valores puntuales.',
			bgColor: "from-purple-500 to-purple-600",
		},
	];

	const filters = [
		{ id: "all", label: "📊 Todas", color: "text-gray-700" },
		{ id: "precision", label: "🎯 Precisión", color: "text-green-700" },
		{ id: "error", label: "⚠️ Errores", color: "text-orange-700" },
		{ id: "forecast", label: "📈 Pronósticos", color: "text-purple-700" },
		{ id: "classification", label: "🏷️ Clasificación", color: "text-blue-700" },
	];

	const filteredMetrics = metrics.filter((metric) => {
		const matchesSearch =
			metric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			metric.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
			metric.description.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesFilter =
			activeFilter === "all" || metric.category.includes(activeFilter);

		return matchesSearch && matchesFilter;
	});

	const getCategoryColor = (categories) => {
		if (categories.includes("precision")) return "from-green-500 to-green-600";
		if (categories.includes("error")) return "from-orange-500 to-orange-600";
		if (categories.includes("forecast")) return "from-purple-500 to-purple-600";
		if (categories.includes("classification"))
			return "from-blue-500 to-blue-600";
		return "from-gray-500 to-gray-600";
	};

	const MetricCard = ({ metric }) => {
		const [isAnimated, setIsAnimated] = useState(false);

		useEffect(() => {
			const timer = setTimeout(() => setIsAnimated(true), Math.random() * 500);
			return () => clearTimeout(timer);
		}, []);

		return (
			<div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-indigo-300 cursor-pointer group">
				{/* Header */}
				<div className="flex items-center mb-4">
					<div
						className={`w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor(metric.category)} flex items-center justify-center text-2xl text-white shadow-lg mr-4`}
					>
						{metric.icon}
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
							{metric.name}
						</h3>
						<p className="text-sm text-gray-600">{metric.subtitle}</p>
					</div>
				</div>

				{/* Description */}
				<div className="mb-4">
					<p className="text-gray-700 leading-relaxed">
						<strong>¿Qué mide?</strong>{" "}
						{metric.description.replace("¿Qué mide? ", "")}
					</p>
				</div>

				{/* Analogy */}
				<div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-400 p-4 rounded-lg mb-4">
					<h4 className="font-bold text-orange-800 mb-2 flex items-center">
						🎯 Analogía:
					</h4>
					<p className="text-orange-700 text-sm">{metric.analogy}</p>
				</div>

				{/* Example */}
				<div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-teal-400 p-4 rounded-lg mb-4">
					<h4 className="font-bold text-teal-800 mb-2 flex items-center">
						📋 Ejemplo Real:
					</h4>
					<p className="text-teal-700 text-sm">{metric.example}</p>
				</div>

				{/* Score Indicator */}
				<div className="bg-gray-50 p-4 rounded-lg mb-4">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs text-gray-600">
							{metric.rangeText.split(" | ")[0]}
						</span>
						<span className="text-xs text-gray-600">
							{metric.rangeText.split(" | ")[1]}
						</span>
					</div>
					<div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
						<div
							className={`h-full bg-gradient-to-r ${metric.scoreGradient} rounded-full transition-all duration-1000 ease-out`}
							style={{ width: isAnimated ? `${metric.scoreWidth}%` : "0%" }}
						/>
					</div>
				</div>

				{/* Interpretation */}
				<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-4 rounded-lg">
					<h4 className="font-bold text-blue-800 mb-2 flex items-center">
						🧠 Interpretación:
					</h4>
					<p className="text-blue-700 text-sm">{metric.interpretation}</p>
				</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 lg:p-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
					<h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
						🤖 Métricas de ML Explicadas
					</h1>
					<p className="text-xl text-gray-600 italic">
						"De números confusos a decisiones inteligentes"
					</p>
				</div>

				{/* Filters */}
				<div className="flex flex-wrap justify-center gap-3 mb-8">
					{filters.map((filter) => (
						<button
							key={filter.id}
							onClick={() => setActiveFilter(filter.id)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
								activeFilter === filter.id
									? "bg-white text-indigo-600 shadow-xl scale-105"
									: "bg-white/80 text-gray-700 hover:bg-white hover:shadow-xl"
							}`}
						>
							{filter.label}
						</button>
					))}
				</div>

				{/* Metrics Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
					{filteredMetrics.map((metric) => (
						<MetricCard key={metric.id} metric={metric} />
					))}
				</div>

				{/* Bottom Tip */}
				<div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl p-6 mb-8 text-center shadow-lg">
					<div className="text-4xl mb-3">🎓</div>
					<p className="text-lg font-semibold text-gray-800 mb-4">
						<strong>Para Recordar:</strong> No existe la métrica perfecta. La
						mejor métrica depende de tu problema:
					</p>
					<div className="text-left max-w-2xl mx-auto space-y-2">
						<p>
							• <strong>Medicina</strong> → Recall alto (no perderte casos)
						</p>
						<p>
							• <strong>Spam</strong> → Precision alto (no molestar usuarios)
						</p>
						<p>
							• <strong>Finanzas</strong> → Balance F1 + MAPE bajo
						</p>
					</div>
				</div>

				{/* Pro Tip */}
				<div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-300 rounded-2xl p-6 mb-8 text-center shadow-lg">
					<div className="text-4xl mb-3">💡</div>
					<p className="text-lg font-semibold text-gray-800">
						<strong>Tip Pro:</strong> No memorices las fórmulas. Entiende qué te
						dice cada métrica y cuándo usarla.
					</p>
				</div>

				{/* Footer */}
				<div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
					<p className="text-xl font-bold text-gray-800 mb-2">
						Creado para universitarios que van a cambiar el mundo 🚀
					</p>
					<p className="text-gray-600">
						Recuerda: Las métricas te dicen QUÉ pasó. Tú decides QUÉ hacer al
						respecto.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MetricsGlossary;
