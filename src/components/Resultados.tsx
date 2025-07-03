import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Dados dos depoimentos
const depoimentos = [
	{
		id: 1,
		imagemAntes: "/uploads/Antes-1.jpg",
		imagemDepois: "/uploads/Depois-1.jpg",
		texto: "A equipe da TricoMaster mudou minha vida. Depois de anos tentando diversos tratamentos sem sucesso.",
		nome: "Arnaldo dos Santos",
		tempo: "Paciente há 1 ano",
		iniciais: "AS"
	},
	{
		id: 2,
		imagemAntes: "/uploads/Antes-2.jpg",
		imagemDepois: "/uploads/Depois-2.jpg",
		texto: "Estou super feliz, todo o tratamento superou minhas expectativas, desde a médica até sua equipe, além de serem muito  profissionais fazem um atendimento humanizado, o que foi de extrema importância no meu caso de queda tão intensa.",
		nome: "Elaine Cristina Chaves",
		tempo: "Paciente há 6 meses",
		iniciais: "EC"
	},
	{
		id: 3,
		imagemAntes: "/uploads/Antes-3.jpg",
		imagemDepois: "/uploads/Depois-3.jpg",
		texto: "recuperei o volume e a vitalidade dos meus fios graças ao tratamento da Tricomaster. Profissionalismo e acolhimento em cada etapa!",
		nome: "Maria Helena Santos",
		tempo: "Paciente há 1 ano",
		iniciais: "MH"
	},
	{
		id: 4,
		imagemAntes: "/uploads/Antes-4.jpg",
		imagemDepois: "/uploads/Depois-4.jpg",
		texto: "Sofri por muito tempo com uma doença capilar sem saber o que era. Passei por diversos médicos mas não conseguiam fechar um diagnóstico. Foi na Tricomaster, indicada por uma amiga, que descobri a alopecia cicatricial. Iniciei o tratamento, e minha doença  hoje está estável. Sou imensamente grata por toda a dedicação e cuidado de todos.",
		nome: "Gisela Garcia",
		tempo: "Paciente há 1 ano",
		iniciais: "GG"
	},
	{
		id: 5,
		imagemAntes: "/uploads/Antes-5.jpg",
		imagemDepois: "/uploads/Depois-5.jpg",
		texto: "Enfrentar o câncer foi traumático, e perder o cabelo piorou ainda mais. Dois anos após a quimioterapia cheguei à Tricomaster sem esperança, mas fui surpreendida por um tratamento excelente e uma equipe acolhedora. Hoje, com meu cabelo de volta sou imensamente grata.",
		nome: "Vera Lúcia",
		tempo: "Paciente há 1 ano",
		iniciais: "VL"
	},
	{
		id: 6,
		imagemAntes: "/uploads/Antes-6.jpg",
		imagemDepois: "/uploads/Depois-6.jpg",
		texto: "Encontrei a Tricomaster pesquisando na internet após sofrer com a queda de cabelo assustadora causada pela dengue. A consulta foi excelente, com explicações claras. Decidi iniciar o tratamento na clínica e meu cabelo melhorou muito. A Tricomaster fez toda a diferença na minha vida.",
		nome: "Valeria Carla ",
		tempo: "Paciente há 1 ano",
		iniciais: "VC"
	},
	{
		id: 7,
		imagemAntes: "/uploads/Antes-7.jpg",
		imagemDepois: "/uploads/Depois-7.jpg",
		texto: "Estou super feliz, todo o tratamento superou minhas expectativas, desde a médica até sua equipe, além de serem muito  profissionais fazem um atendimento humanizado, o que foi de extrema importância no meu caso de queda tão intensa.",
		nome: "Jorge Mendonça",
		tempo: "Paciente há 1 ano",
		iniciais: "JM"
	},
	{
		id: 8,
		imagemAntes: "/uploads/Antes-8.jpg",
		imagemDepois: "/uploads/Depois-8.jpg",
		texto: "Com 72 anos, voltei a ter cabelos cheios após o tratamento capilar da Tricomaster. Equipe maravilhosa e resultado surpreendente!",
		nome: "José Pedro Almeida",
		tempo: "Paciente há 1 ano",
		iniciais: "JP"
	},
	{
		id: 9,
		imagemAntes: "/uploads/Antes-9.jpg",
		imagemDepois: "/uploads/Depois-9.jpg",
		texto: "Eu sofria com calvície hereditária e o transplante na Tricomaster foi perfeito. Equipe atenciosa e resultado natural. Autoestima lá em cima!",
		nome: "Antônio Silva",
		tempo: "Paciente há 1 ano",
		iniciais: "AS"
	},
	{
		id: 10,
		imagemAntes: "/uploads/Antes-10.jpg",
		imagemDepois: "/uploads/Depois-10.jpg",
		texto: "Meu cabelo estava muito fino e, com as sessões de mesoterapia e orientação nutricional, recuperei volume e confiança. Atendimento impecável!",
		nome: "Francisco Oliveira",
		tempo: "Paciente há 1 ano",
		iniciais: "FO"
	},
	{
		id: 11,
		imagemAntes: "/uploads/Antes-11.jpg",
		imagemDepois: "/uploads/Depois-11.jpg",
		texto: "Depois da menopausa, meu cabelo ficou ralo. O cronograma personalizado da Tricomaster trouxe força e brilho de volta aos fios. Obrigada, Dra. Luciane!",
		nome: "Teresa Nunes",
		tempo: "Paciente há 1 ano",
		iniciais: "TN"
	},
	{
		id: 12,
		imagemAntes: "/uploads/Antes-12.jpg",
		imagemDepois: "/uploads/Depois-12.jpg",
		texto: "Fiz mesoterapia e suplementação na clínica e já vejo novos fios crescendo. Ambiente acolhedor e equipe dedicada, recomendo muito!",
		nome: "Helena Carvalho",
		tempo: "Paciente há 1 ano",
		iniciais: "HC"
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
						Resultados reais que vão além da estética. Descubra como nossos pacientes recuperaram a autoestima e transformaram suas vidas!
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-4 items-start">
					{/* Carrossel no mobile */}
					<div className="lg:w-2/3">
						<div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 relative">
							<div className="flex flex-col sm:flex-row gap-1 justify-center items-center">
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
								<p className="text-gray-600 italic mb-4">"{imagemAtual.texto}"</p>
								<h4 className="text-lg font-medium">{imagemAtual.nome}</h4>
								{/*<p className="text-sm text-gray-500">{imagemAtual.tempo}</p>*/}
							</div>
							{/* Botões de navegação do carrossel */}
							<div className="absolute top-1/2 left-4 transform -translate-y-1/2 lg:hidden">
								<button onClick={anteriorDepoimento} className="bg-gray-200 p-2 rounded-full shadow-md">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" className="h-6 w-6">
										<path d="M15 19l-7-7 7-7"></path>
									</svg>
								</button>
							</div>
							<div className="absolute top-1/2 right-4 transform -translate-y-1/2 lg:hidden">
								<button onClick={proximoDepoimento} className="bg-gray-200 p-2 rounded-full shadow-md">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" className="h-6 w-6">
										<path d="M9 5l7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* Cards de seleção no desktop */}
					<div className="hidden lg:block lg:w-1/3 space-y-6 overflow-y-auto max-h-100">
						{depoimentos.map((depoimento) => (
							<Card
								key={depoimento.id}
								className={`bg-gray-100 p-3 rounded-lg border-l-4 ${imagemAtual.id === depoimento.id ? 'border-tricomaster-green bg-gray-200' : 'border-gray-300'} shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg`}
								onClick={() => setImagemAtual(depoimento)}
							>
								<CardContent className="p-0">
									<p className="text-md text-gray-700 italic mb-2">"{depoimento.texto}"</p>
									<div className="flex items-center">
										<div className={`w-10 h-10 rounded-full ${imagemAtual.id === depoimento.id ? 'bg-tricomaster-green' : 'bg-tricomaster-gray'} flex items-center justify-center text-white font-bold transition-colors duration-200`}>
											{depoimento.iniciais}
										</div>
										<div className="ml-3">
											<h4 className="text-sm font-medium">{depoimento.nome}</h4>
											{/*<p className="text-xs text-gray-500">{depoimento.tempo}</p>*/}
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
