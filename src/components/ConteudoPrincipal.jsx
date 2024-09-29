import Banner from "./Banner";
import BuildCard from "./BuildCard";
import ButtonPlay from "./ButtonPlay";
import Description from "./Description";
import LogoImagens from "./LogoImages";
import Sections from "./Sections";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function ConteudoPrincipal({ logos, textButton, sectionStyle, title, text, description, advantagens }){

    const titleHome = [
        "text-white font-russo text-center sm:text-4xl text-2xl sm:pb-5 pb-3",
        "Mergulhe no universo das Corridas Sustentáveis"
    ]

    const aboutLogos = [
        {
        search: "/logo-formula-e.svg",
        altImg: "Logotipo da Fóromula E",
        style: "w-16 sm:w-24 md:w-32 lg:w-40 h-auto"       
        },
        {
        search: "/logo-mahindra.svg",
        altImg: "Logotipo da Tech Mahindra",
        style: "w-16 sm:w-24 md:w-32 lg:w-40 h-auto"    
        }
    ];

    const textAndStyleButtonPlay = [
        {
        style: "bg-transparent text-white font-bold rounded-3xl border-white hover:bg-white hover:text-[#0000ff] border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6  hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out",
        text: "Corra agora"
        }
    ];

    const styleOfSections = ['flex flex-col-reverse relative w-full min-w-56 bg-custom-radial rotate-180 sm:px-32 sm:py-30 sm:gap-5 px-10 py-20', 
        'flex flex-col relative w-full min-w-56 bg-black sm:px-32 sm:py-30 sm:gap-5 px-10 py-20']


    const textsSubtitle = [
        'Carros Sustentáveis',
        'Construa, Corra e Conquiste!'
    ];

    const textAndStyleDescription = [
        {
        text: '100% Elétricos'
        },
        {
        text: 'Emitem 1% de CO²'
        },
        {
        text: 'Carregados com Energia Renovável'
        },
        {
        text: 'Recarrega na frenagem'
        },
        {
        text: 'Mais de 322 km/h'
        }
    ];

    const imagens = [
        {
        search: "/graphic.png",
        altImg: "Gráfico Emissão de CO2",
        }
    ];

    const advantagensBuild = [
        {
        title: 'Monte Seu Próprio Carrinho de Fórmula E',
        text: 'Descubra como é fácil personalizar seu carrinho e torná-lo único! Escolha peças, monte a estrutura e ajuste cada detalhe para alcançar o desempenho ideal nas pistas.',
        link: '/manual',
        textButton: 'Comece a Montar'
        },
        {
        title: 'Marque Seus Tempos e Compare',
        text: 'Monitore suas voltas e compare com outros pilotos. Desafie-se a bater os melhores tempos e suba no ranking!',
        link: '/login',
        textButton: 'Bata Records'
        },
        {
        title: 'Benefícios da Tecnologia Sustentável',
        text: 'Utilize componentes reutilizáveis e contribua para um futuro mais verde enquanto se diverte com a engenharia e inovação tecnológica.',
        link: '/',
        textButton: 'Saiba Mais'
        },
        {
        title: 'Vantagens de Participar do Eco Race',
        text: 'Ganhe Carbons Coins com cada corrida e use suas moedas para adquirir novas peças, garantindo desempenho superior nas pistas!',
        link: '/login',
        textButton: 'Participe Agora'
        },
    ]  

    const sectionWithImage = 'flex flex-col lg:flex-row w-full bg-black sm:px-32 sm:py-30 px-10 py-20 gap-10'

    const imageSection = [
        {
        search: "/car-formula-e.png",
        altImg: "Imagem do carro de fórmula E",
        style: "w-full rounded-3xl"
        }
    ]

    const titleSectionImage =
        {
        style: "text-[#0000ff] font-russo lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:py-5 md:py-4 sm:py-3 py-2",
        text: "Prepare-se para a Corrida!"
        }

    const buttonPlay = [
        {
        style: "bg-[#0000ff] text-white font-roboto font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition shadow-[0_0_15px_#0000ff] hover:shadow-[0_0px_20px_#0000ff] mt-5 lg:mt-0",
        text: "Participe Agora"
        }
    ]

    const textsSectionImage = [
        {
        text: "Teste suas habilidades e desafie seus limites. Corra, acumule pontos e compare seu desempenho com outros pilotos!"
        },
        {
        text: "Monte seu carrinho, escolha a pista e dê o seu melhor. Quanto mais você corre, mais pontos ganha. Pronto para começar?"
        }
    ]

    const imageEcoRace = [
        {
        search: "/src/assets/icon-eco-race.svg",
        altImg: "Logotipo da Eco Race",
        style: "w-full rounded-3xl"
        }
    ]

    const titleSectionLogo =
        {
        style: "text-white font-russo text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:py-5 md:py-4 sm:py-3 py-2",
        text: "Eco Race, corra para um futuro melhor!"
        }

    const sectionLogo = 'flex flex-col items-center justify-center w-full bg-black sm:px-32 sm:py-30 gap-10 px-10 py-20'
    
    return(
        <>
            <Banner>
                <div className="flex flex-col items-center">
                    <Title style={titleHome[0]} text={titleHome[1]}/>
                    <div className="flex gap-3 w-full h-auto justify-center items-center lg:w-3/4 md:w-4/5 sm:w-full">
                        <LogoImagens logotipos={aboutLogos}/>
                    </div>
                </div>
                <ButtonPlay playButton={textAndStyleButtonPlay}/>
            </Banner>
            <Sections sectionStyle={styleOfSections[0]}>
                <div className="rotate-180 w-full">
                    <Subtitle text={textsSubtitle[0]}/>
                </div>
                <div className="flex sm:flex-row-reverse flex-col-reverse sm:gap-3 gap-10 items-center ">
                    <div className="rotate-180 sm:w-1/2 w-full">
                        <Description forDescription={textAndStyleDescription}/>
                    </div>
                    <div className="rotate-180 sm:w-1/2 w-9/12">
                        <LogoImagens logotipos={imagens}/>
                    </div>
                </div>
            </Sections>
            <Sections sectionStyle={styleOfSections[1]}>
                <div className="w-full text-center">
                    <Subtitle text={textsSubtitle[1]}/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 py-10">
                    <BuildCard advantagen={advantagensBuild}/>
                </div>
            </Sections>

            <Sections sectionStyle={sectionWithImage}>
                <div className="w-full lg:w-1/2">
                    <LogoImagens logotipos={imageSection}/>
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left flex flex-col gap-4 lg:gap-6">
                    <Title style={titleSectionImage.style} text={titleSectionImage.text}/>
                    <Description forDescription={textsSectionImage}/>
                    <ButtonPlay playButton={buttonPlay}/>
                </div>

            </Sections>

            <Sections sectionStyle={sectionLogo}>
                <div className="sm:w-1/5 w-1/3">
                    <LogoImagens logotipos={imageEcoRace}/>
                </div>

                <div>
                    <Title style={titleSectionLogo.style} text={titleSectionLogo.text}/>
                </div>
            </Sections>
        </>
    )
}