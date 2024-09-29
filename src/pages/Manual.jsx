import Sections from "../components/Sections";
import Title from "../components/Title";
import LinksManual from "../components/LinksManual";
import Explication from "../components/Explication";

export default function Manual({ text, style }) {

  const textAndStyleExplication = 
    {
    style1:"text-white font-roboto sm:text-xl text-sm", 
    text1: "Pronto para acelerar?",
    style2: "text-white font-roboto md:text-xl text-sm pr-5",
    text2: "Todas as peças e links para montar o carrinho dos seus sonhos. Comece agora!"
    };


  const titleManual = {
    style: "text-primary-color font-russo text-start sm:text-4xl text-2xl sm:pb-5 pb-3",
    text: "Monte o seu Fórmula E"
  };

  const styleOfSections = "flex flex-col relative w-full min-w-56 bg-black sm:px-32 sm:py-40 gap-20 px-10 py-20";

  const titleAndLinkManual = [
    {
      title: "2 Motores",
      search: "https://www.robocore.net/motor-motoredutor/motor-dc-3-6v-com-caixa-de-reducao-e-eixo-duplo"
    },
    {
      title: "4 Rodas",
      search: "https://www.robocore.net/roda/roda-hobby-65mm"
    },
    {
      title: "1 Servo Motor",
      search: "https://www.robocore.net/servo-motor/micro-servo-9g-sg90-towerpro"
    },
    {
      title: "1 Kit de Cabos",
      search: "https://www.robocore.net/cabo/jumpers-macho-femea-x40-unidades"
    },
    {
      title: "1 ESP32",
      search: "https://www.robocore.net/wifi/esp32-wifi-bluetooth"
    },
    {
      title: "1 Mini Ponte H",
      search: "https://www.robocore.net/driver-motor/mini-ponte-h-dupla-mx1616"
    },
    {
      title: "1 ESP8266",
      search: "https://www.robocore.net/wifi/modulo-wifi-esp8266"
    },
    {
      title: "1 Sensor ultrassônico",
      search: "https://www.robocore.net/sensor-robo/sensor-de-distancia-ultrassonico-hc-sr04"
    },
  ];

  return (
    <Sections sectionStyle={styleOfSections}>
      <div className="flex flex-col items-start">
        <Explication style={textAndStyleExplication.style1} text={textAndStyleExplication.text1}/>

        <Title style={titleManual.style} text={titleManual.text} />

        <Explication style={textAndStyleExplication.style2} text={textAndStyleExplication.text2}/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <LinksManual link={titleAndLinkManual} />
      </div>

      <div
        className="group flex flex-col bg-transparent p-4 rounded-3xl border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 cursor-pointer"
        onClick={() => window.open("https://www.thingiverse.com/thing:1193309", "_blank")}
      >
        <p className="sm:text-lg text-sm text-center font-roboto text-white group-hover:text-black transition-colors duration-300">
          Projeto para Impressão 3D
        </p>
      </div>

      <div className="flex flex-col gap-5 bg-slate-200 rounded-3xl p-10">
        <h3 className="text-black text-start sm:text-center sm:text-lg text-sm">
          Agora que você já tem tudo, confira os locais mais próximos de você para fazer a impressão 3D.
        </h3>

        <div
          className="group flex flex-col bg-[#0000ff] p-4 rounded-3xl border-2 border- shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 cursor-pointer"
          onClick={() => window.open("https://www.google.com/maps/search/impress%C3%A3o+3d+perto+de+mim/@-23.5459301,-46.6566483,14z?", "_blank")}
        >
          <p className="sm:text-lg text-sm text-center font-roboto text-white group-hover:text-[#0000ff] transition-colors duration-300">
            Encontrar
          </p>
        </div>
      </div>
    </Sections>
  );
}