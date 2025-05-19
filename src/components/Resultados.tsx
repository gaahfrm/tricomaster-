import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Dados dos depoimentos
const depoimentos = [
	{
		id: 1,
		imagemAntes: "tricomaster/lovable-uploads/Antes-1.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-1.webp",
		texto: "A equipe da TricoMaster mudou minha vida. Depois de anos tentando diversos tratamentos sem sucesso.",
		nome: "Paciente 1",
		tempo: "Paciente há 1 ano",
		iniciais: "PC"
	},
	{
		id: 2,
		imagemAntes: "tricomaster/lovable-uploads/Antes-2.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-2.webp",
		texto: "A equipe da TricoMaster mudou minha vida. Depois de anos tentando diversos tratamentos sem sucesso.",
		nome: "Paciente 2",
		tempo: "Paciente há 6 meses",
		iniciais: "PC"
	},
	{
		id: 3,
		imagemAntes: "tricomaster/lovable-uploads/Antes-3.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-3.webp",
		texto: "Após apenas três sessões de tratamento, percebi uma redução significativa na queda de cabelo. Estou muito satisfeito com os resultados!",
		nome: "Anderson",
		tempo: "Paciente há 1 ano",
		iniciais: "AD"
	},
	{
		id: 4,
		imagemAntes: "tricomaster/lovable-uploads/Antes-4.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-4.webp",
		texto: "Após apenas três sessões de tratamento, percebi uma redução significativa na queda de cabelo. Estou muito satisfeito com os resultados!",
		nome: "Paciente 3",
		tempo: "Paciente há 1 ano",
		iniciais: "PC"
	},
	{
		id: 5,
		imagemAntes: "tricomaster/lovable-uploads/Antes-5.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-5.webp",
		texto: "Após apenas três sessões de tratamento, percebi uma redução significativa na queda de cabelo. Estou muito satisfeito com os resultados!",
		nome: "Paciente ",
		tempo: "Paciente há 1 ano",
		iniciais: "PC"
	},
	{
		id: 6,
		imagemAntes: "tricomaster/lovable-uploads/Antes-6.webp",
		imagemDepois: "tricomaster/lovable-uploads/Depois-6.webp",
		texto: "Após apenas três sessões de tratamento, percebi uma redução significativa na queda de cabelo. Estou muito satisfeito com os resultados!",
		nome: "Paciente ",
		tempo: "Paciente há 1 ano",
		iniciais: "PC"
	}
];

const Resultados = () => {
	// Estado para controlar qual imagem está sendo exibida
	const [imagemAtual, setImagemAtual] = useState(depoimentos[0]);
	const [indiceAtual, setIndiceAtual] = useState(0); // Estado para o índice do carrossel

	// Função para alterar a imagem no carrossel
	const proximoDepoimento = () => {
		setIndiceAtual((prev) => (prev + 1) % depoimentos.length);
		setImagemAtual(depoimentos[(indiceAtual + 1) % depoimentos.length]);
	};

	const anteriorDepoimento = () => {
		setIndiceAtual((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
		setImagemAtual(depoimentos[(indiceAtual - 1 + depoimentos.length) % depoimentos.length]);
	};

	return (
		<section id="resultados" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
			<div className="container-section">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">RESULTADOS COMPROVADOS</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Confira a transformação na vida dos nossos pacientes
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8 items-start">
					{/* Carrossel no mobile */}
					<div className="lg:w-2/3">
						<div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 relative">
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<div className="flex-1 flex flex-col items-center">
									<span className="text-gray-500 font-semibold mb-2">Antes</span>
									<img
										src={imagemAtual.imagemAntes}
										alt="Antes do tratamento"
										className="w-full max-w-xs h-auto rounded-lg object-cover border"
									/>
								</div>
								<div className="flex-1 flex flex-col items-center">
									<span className="text-gray-500 font-semibold mb-2">Depois</span>
									<img
										src={imagemAtual.imagemDepois}
										alt="Depois do tratamento"
										className="w-full max-w-xs h-auto rounded-lg object-cover border"
									/>
								</div>
							</div>
							<div className="mt-6 text-center">
								{/*<p className="text-gray-600 italic mb-4">"{imagemAtual.texto}"</p>*/}
								<h4 className="text-lg font-medium">{imagemAtual.nome}</h4>
								<p className="text-sm text-gray-500">{imagemAtual.tempo}</p>
							</div>
							{/* Botões de navegação do carrossel */}
							<div className="absolute top-1/2 left-4 transform -translate-y-1/2 lg:hidden">
								<button onClick={anteriorDepoimento} className="bg-gray-200 p-2 rounded-full shadow-md">
									&lt;
								</button>
							</div>
							<div className="absolute top-1/2 right-4 transform -translate-y-1/2 lg:hidden">
								<button onClick={proximoDepoimento} className="bg-gray-200 p-2 rounded-full shadow-md">
									&gt;
								</button>
							</div>
						</div>
					</div>

					{/* Cards de seleção no desktop */}
					<div className="hidden lg:block lg:w-1/3 space-y-6 overflow-y-auto max-h-100">
						{depoimentos.map((depoimento) => (
							<Card
								key={depoimento.id}
								className={`bg-gray-100 p-4 rounded-lg border-l-4 ${imagemAtual.id === depoimento.id ? 'border-tricomaster-green bg-gray-200' : 'border-gray-300'} shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg`}
								onClick={() => setImagemAtual(depoimento)}
							>
								<CardContent className="p-0">
									{/*<p className="text-md text-gray-700 italic mb-2">"{depoimento.texto}"</p>*/}
									<div className="flex items-center">
										<div className={`w-10 h-10 rounded-full ${imagemAtual.id === depoimento.id ? 'bg-tricomaster-green' : 'bg-tricomaster-gray'} flex items-center justify-center text-white font-bold transition-colors duration-200`}>
											{depoimento.iniciais}
										</div>
										<div className="ml-3">
											<h4 className="text-sm font-medium">{depoimento.nome}</h4>
											<p className="text-xs text-gray-500">{depoimento.tempo}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resultados;
