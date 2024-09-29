import Explication from "./Explication";
import Pistas from "./Pistas";

export default function PistasCard({ style, text, pistas }){

    const textAndStyleExplication = {
    style: "text-white font-russo md:text-2xl text-sm",
    text: "Bata records nas principais pistas da E-Prix!"
    };

    const pistasDados = [
        {
        img: "/circuite-monaco.svg",
        alt: "Imagem do circuito de Monaco",
        name: "Circuito de Monaco - 1 volta",
        time: "Tempo record: 9,64 s",
        extetion: "Extensão: 266,96 m",
        },
        {
        img: "/circuite-mexico.svg",
        alt: "Imagem do circuito de Mexico",
        name: "Circuito do Mexico - 1 volta",
        time: "Tempo record: 6,70 s",
        extetion: "Extensão: 210,24 m"
        },
    ]

    return(
        <>
            <div className="flex flex-col gap-5 w-full">
                <div className="bg-[#0000ff] bg-opacity-50 backdrop-blur-lg rounded-3xl p-4 shadow-lg inline-block text-center">
                    <Explication style={textAndStyleExplication.style} text={textAndStyleExplication.text} />
                </div>
                <div className="flex flex-col gap-5 bg-gray-700 p-6 rounded-3xl">
                    <Pistas dadosPistas={pistasDados}/>
                </div>    
            </div>
        </>
    )
}