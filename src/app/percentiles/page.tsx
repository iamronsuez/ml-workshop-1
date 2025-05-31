"use client";

import React, { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Area,
	AreaChart,
	ReferenceLine,
} from "recharts";
import {
	Info,
	Zap,
	TrendingUp,
	AlertTriangle,
	CheckCircle,
	HelpCircle,
} from "lucide-react";

const scenarios = {
	conservative: {
		name: "Conservador",
		decision: "Preparar 146 kW",
		icon: "🛡️",
		pros: ["Nunca habrá apagones", "Máxima confiabilidad"],
		cons: ["Mayor costo", "Posible desperdicio"],
		color: "green",
	},
	balanced: {
		name: "Balanceado",
		decision: "Preparar 100 kW",
		icon: "⚖️",
		pros: ["Equilibrio costo-riesgo", "Eficiencia óptima"],
		cons: ["Riesgo moderado", "Requiere flexibilidad"],
		color: "blue",
	},
	risky: {
		name: "Arriesgado",
		decision: "Preparar 54 kW",
		icon: "🎲",
		pros: ["Mínimo costo", "Máximo ahorro"],
		cons: ["Alto riesgo de apagones", "Clientes insatisfechos"],
		color: "red",
	},
};

type ScenarioKey = "conservative" | "balanced" | "risky";

const PercentilesExplicacion = () => {
	const [selectedScenario, setSelectedScenario] =
		useState<ScenarioKey>("balanced");
	const [showRealValue, setShowRealValue] = useState(false);
	const [userGuess, setUserGuess] = useState(100);

	// Datos de ejemplo
	const predictionData = [
		{ name: "P10", value: 54, label: "Mínimo esperado", color: "#ef4444" },
		{ name: "P50", value: 100, label: "Más probable", color: "#3b82f6" },
		{ name: "P90", value: 146, label: "Máximo esperado", color: "#10b981" },
	];

	// Datos para el gráfico de área
	const areaData = Array.from({ length: 100 }, (_, i) => {
		const x = 30 + i * 1.5;
		const center = 100;
		const spread = 30;
		const y =
			Math.exp(-Math.pow(x - center, 2) / (2 * Math.pow(spread, 2))) * 100;
		return { x, y, p10: x >= 54 ? y : 0, p90: x <= 146 ? y : 0 };
	});

	const realConsumption = 95; // Valor real simulado

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">
						🎯 Entendiendo Percentiles en Predicciones de IA
					</h1>
					<p className="text-xl text-gray-600">
						Aprende cómo la IA maneja la incertidumbre en sus predicciones
					</p>
				</div>

				{/* Sección 1: ¿Qué son los Percentiles? */}
				<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<HelpCircle className="mr-3 text-blue-500" />
						¿Qué son los Percentiles?
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<div className="bg-blue-50 p-6 rounded-xl">
								<h3 className="font-bold text-blue-800 mb-3">
									Analogía Simple:
								</h3>
								<p className="text-blue-700">
									Imagina que preguntas a <strong>100 expertos</strong> cuánta
									energía se consumirá mañana...
								</p>
							</div>

							<div className="space-y-3">
								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
										10
									</div>
									<div>
										<strong className="text-red-600">P10 = 54 kW</strong>
										<p className="text-gray-600">
											Solo 10 expertos dijeron menos que esto
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
										50
									</div>
									<div>
										<strong className="text-blue-600">P50 = 100 kW</strong>
										<p className="text-gray-600">
											La mitad dijo más, la mitad dijo menos
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
										90
									</div>
									<div>
										<strong className="text-green-600">P90 = 146 kW</strong>
										<p className="text-gray-600">
											Solo 10 expertos dijeron más que esto
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
							<h3 className="font-bold text-orange-800 mb-4">
								En Términos de Confianza:
							</h3>
							<div className="space-y-4">
								<div className="bg-white p-4 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-bold text-red-600">P10</span>
										<span className="text-gray-600">
											90% seguro que será MÁS que esto
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-red-500 h-2 rounded-full"
											style={{ width: "90%" }}
										></div>
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-bold text-blue-600">P50</span>
										<span className="text-gray-600">Mi mejor estimación</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-blue-500 h-2 rounded-full"
											style={{ width: "50%" }}
										></div>
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-bold text-green-600">P90</span>
										<span className="text-gray-600">
											90% seguro que será MENOS que esto
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-green-500 h-2 rounded-full"
											style={{ width: "10%" }}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Sección 2: Visualización de la Predicción */}
				<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<Zap className="mr-3 text-yellow-500" />
						Predicción de Consumo Energético
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-bold text-gray-700 mb-4">
								Rangos de Predicción (kW)
							</h3>
							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={predictionData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="value" fill="#8884d8">
										{predictionData.map((entry, index) => (
											//@ts-ignore
											<Bar key={`cell-${index}`} fill={entry.color} />
										))}
									</Bar>
								</BarChart>
							</ResponsiveContainer>
						</div>

						<div>
							<h3 className="font-bold text-gray-700 mb-4">
								Distribución de Probabilidad
							</h3>
							<ResponsiveContainer width="100%" height={300}>
								<AreaChart data={areaData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis
										dataKey="x"
										label={{
											value: "Consumo (kW)",
											position: "insideBottom",
											offset: -5,
										}}
									/>
									<YAxis
										label={{
											value: "Probabilidad",
											angle: -90,
											position: "insideLeft",
										}}
									/>
									<Tooltip />
									<Area
										type="monotone"
										dataKey="y"
										stroke="#8884d8"
										fill="#8884d8"
										fillOpacity={0.1}
									/>
									<Area
										type="monotone"
										dataKey="p10"
										stroke="#ef4444"
										fill="#ef4444"
										fillOpacity={0.3}
									/>
									<Area
										type="monotone"
										dataKey="p90"
										stroke="#10b981"
										fill="#10b981"
										fillOpacity={0.3}
									/>
									<ReferenceLine
										x={54}
										stroke="#ef4444"
										strokeDasharray="5 5"
									/>
									<ReferenceLine
										x={100}
										stroke="#3b82f6"
										strokeDasharray="5 5"
									/>
									<ReferenceLine
										x={146}
										stroke="#10b981"
										strokeDasharray="5 5"
									/>
									{showRealValue && (
										<ReferenceLine
											x={realConsumption}
											stroke="#f59e0b"
											strokeWidth={3}
										/>
									)}
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>

					<div className="mt-6 bg-blue-50 p-4 rounded-xl">
						<p className="text-blue-800">
							<strong>La zona sombreada muestra:</strong> Hay un 80% de
							probabilidad de que el consumo real esté entre 54 kW (P10) y 146
							kW (P90).
						</p>
					</div>
				</div>

				{/* Sección 3: Simulador de Decisiones */}
				<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<TrendingUp className="mr-3 text-purple-500" />
						Simulador de Decisiones
					</h2>

					<div className="mb-6">
						<h3 className="font-bold text-gray-700 mb-4">
							¿Qué estrategia elegirías como gerente de la cooperativa?
						</h3>
						<div className="grid md:grid-cols-3 gap-4">
							{Object.entries(scenarios).map(([key, scenario]) => (
								<button
									key={key}
									onClick={() => setSelectedScenario(key as ScenarioKey)}
									className={`p-6 rounded-xl border-2 transition-all ${
										selectedScenario === key
											? `border-${scenario.color}-500 bg-${scenario.color}-50`
											: "border-gray-200 hover:border-gray-300"
									}`}
								>
									<div className="text-4xl mb-2">{scenario.icon}</div>
									<h4 className="font-bold text-lg mb-2">{scenario.name}</h4>
									<p className="text-gray-600">{scenario.decision}</p>
								</button>
							))}
						</div>
					</div>

					{selectedScenario && scenarios && (
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="font-bold text-gray-700 mb-4">
								Análisis de la Estrategia {scenarios?.[selectedScenario]?.name}
							</h4>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h5 className="font-semibold text-green-600 mb-2 flex items-center">
										<CheckCircle className="mr-2" size={20} />
										Ventajas
									</h5>
									<ul className="space-y-2">
										{scenarios[selectedScenario].pros.map((pro, idx) => (
											<li key={idx} className="text-green-700">
												• {pro}
											</li>
										))}
									</ul>
								</div>
								<div>
									<h5 className="font-semibold text-red-600 mb-2 flex items-center">
										<AlertTriangle className="mr-2" size={20} />
										Desventajas
									</h5>
									<ul className="space-y-2">
										{scenarios[selectedScenario].cons.map((con, idx) => (
											<li key={idx} className="text-red-700">
												• {con}
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="mt-6">
								<button
									onClick={() => setShowRealValue(!showRealValue)}
									className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
								>
									{showRealValue ? "Ocultar" : "Revelar"} Consumo Real
								</button>

								{showRealValue && (
									<div className="mt-4 p-4 bg-yellow-50 rounded-lg">
										<p className="text-yellow-800">
											<strong>Consumo Real: {realConsumption} kW</strong>
										</p>
										<p className="mt-2">
											{selectedScenario === "conservative" &&
												"Preparaste 146 kW - ¡Sobró energía pero garantizaste el servicio!"}
											{selectedScenario === "balanced" &&
												"Preparaste 100 kW - ¡Excelente decisión, muy cerca del consumo real!"}
											{selectedScenario === "risky" &&
												"Preparaste 54 kW - ¡Faltó energía! Posibles apagones 😰"}
										</p>
									</div>
								)}
							</div>
						</div>
					)}
				</div>

				{/* Sección 4: Juego Interactivo */}
				<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<Info className="mr-3 text-indigo-500" />
						Prueba Tu Intuición
					</h2>

					<div className="bg-indigo-50 p-6 rounded-xl">
						<h3 className="font-bold text-indigo-800 mb-4">
							Si tuvieras que adivinar el consumo de mañana, ¿qué dirías?
						</h3>

						<div className="space-y-4">
							<div>
								<label className="block text-gray-700 mb-2">
									Tu predicción (kW):
								</label>
								<input
									type="range"
									min="30"
									max="180"
									value={userGuess}
									onChange={(e) => setUserGuess(Number(e.target.value))}
									className="w-full"
								/>
								<div className="flex justify-between text-sm text-gray-600 mt-1">
									<span>30 kW</span>
									<span className="font-bold text-lg text-indigo-600">
										{userGuess} kW
									</span>
									<span>180 kW</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg">
								<h4 className="font-semibold mb-2">
									Comparación con el Modelo IA:
								</h4>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Tu predicción:</span>
										<span className="font-bold">{userGuess} kW</span>
									</div>
									<div className="flex justify-between">
										<span>Predicción IA (P50):</span>
										<span className="font-bold">100 kW</span>
									</div>
									<div className="flex justify-between">
										<span>Diferencia:</span>
										<span
											className={`font-bold ${Math.abs(userGuess - 100) < 20 ? "text-green-600" : "text-red-600"}`}
										>
											{Math.abs(userGuess - 100)} kW
										</span>
									</div>
								</div>

								<div className="mt-4 p-3 bg-gray-50 rounded">
									<p className="text-sm text-gray-700">
										{userGuess < 54 &&
											"⚠️ Muy optimista - Alto riesgo de apagones"}
										{userGuess >= 54 &&
											userGuess < 100 &&
											"👍 Dentro del rango, pero por debajo de la media"}
										{userGuess >= 100 &&
											userGuess <= 146 &&
											"🎯 ¡Excelente! Estás en el rango más probable"}
										{userGuess > 146 &&
											"🛡️ Muy conservador - Seguro pero costoso"}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Conclusiones */}
				<div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-xl p-8">
					<h2 className="text-2xl font-bold mb-6">🎓 Lo que Aprendiste</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
							<h3 className="font-bold text-xl mb-3">
								Percentiles = Niveles de Confianza
							</h3>
							<ul className="space-y-2">
								<li>• P10: Escenario pesimista (90% seguro que será más)</li>
								<li>• P50: Escenario más probable (la mediana)</li>
								<li>• P90: Escenario optimista (90% seguro que será menos)</li>
							</ul>
						</div>
						<div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
							<h3 className="font-bold text-xl mb-3">En la Vida Real</h3>
							<ul className="space-y-2">
								<li>• No existe predicción 100% exacta</li>
								<li>• Los rangos ayudan a tomar mejores decisiones</li>
								<li>• El contexto define qué percentil usar</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PercentilesExplicacion;
