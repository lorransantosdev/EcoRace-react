import Banner from "./Banner";
import ButtonPlay from "./ButtonPlay";
import Description from "./Description";
import LogoImagens from "./LogoImages";
import Sections from "./Sections";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function ConteudoPrincipal({ logos, textButton, sectionStyle, title, text, description }){

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
        'Construa e Corra!'
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
        style: ""
        }
    ];
    
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
            </Sections>

        </>
    )
}