import Description from "../components/Description";
import LogoImagens from "../components/LogoImages";
import Sections from "../components/Sections";
import Title from "../components/Title";

export default function Sustainability() {
  const sectionSustainability = 'flex flex-col justify-center w-full bg-black sm:px-32 sm:py-40 gap-20 px-10 py-20';

  const titleFormulaE = {
    style: "text-3xl lg:text-5xl font-russo text-primary-color",
    text: "Sustentabilidade na Fórmula E"
  };

  const descriptionFormulaE = [
    {
      text: "A Fórmula E é o campeonato automobilístico mais sustentável do mundo, utilizando apenas carros elétricos e promovendo a inovação no desenvolvimento de tecnologias limpas. Desde o início, a competição foi criada com a missão de acelerar a transição para veículos mais ecológicos e apoiar soluções para reduzir as emissões de carbono no setor de mobilidade."
    },
    {
      text: "A Fórmula E adota uma abordagem sustentável em todas as suas atividades, desde a logística até a utilização de energia renovável nos eventos. A cada temporada, busca alcançar a neutralidade de carbono e reduzir o impacto ambiental ao mínimo possível, provando que é possível ter um futuro mais limpo e eficiente no automobilismo."
    }
  ];

  const titleCarbon = {
    style: "text-3xl lg:text-5xl font-russo text-primary-color",
    text: "O que são Carbons Coins?"
  };

  const descriptionCarbon = [
    {
      text: "Carbons Coins é um sistema de pontuação que recompensa os pilotos virtuais por suas habilidades e pelo tempo que passam competindo de maneira sustentável. A cada corrida realizada, o piloto acumula pontos com base em seu desempenho e no tempo total da corrida."
    },
    {
      text: "Esses pontos podem ser trocados por prêmios exclusivos, como acessórios para o seu carrinho, upgrades, ou até mesmo descontos em produtos sustentáveis. O objetivo é incentivar a competitividade saudável e a conscientização ambiental, recompensando a participação ativa e o aprendizado sobre práticas ecológicas no automobilismo."
    }
  ];

  const imageCar = [
    {
      search: "/car-formula-e-back.webp",
      altImg: "Carro Sustentável fórmula E",
      style: "w-full rounded-3xl"
    }
  ];

  const imageEcoRace = [
    {
      search: "/src/assets/icon-eco-race.svg",
      altImg: "Logotipo da Eco Race",
      style: "w-full rounded-3xl"
    }
  ];

  return (
    <Sections sectionStyle={sectionSustainability}>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Title style={titleFormulaE.style} text={titleFormulaE.text} />
          <Description forDescription={descriptionFormulaE} />
        </div>

        <div className="w-full lg:w-2/5 flex justify-center">
          <LogoImagens logotipos={imageCar} />
        </div>

      </div>

      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Title style={titleCarbon.style} text={titleCarbon.text} />
          <Description forDescription={descriptionCarbon} />
        </div>

        <div className="w-1/2 lg:w-3/12 flex justify-center">
          <LogoImagens logotipos={imageEcoRace} />
        </div>
      </div>
    </Sections>
  );
}
