import { useState, useEffect } from "react";
import Contador from "./Contador";
import Sections from "./Sections";
import Explication from "./Explication";
import PistasCard from "./PistasCard";

export default function AreaUsuario({ sectionStyle, text, style }) {
  const textAndStyleExplication = {
    style: "text-white font-roboto sm:text-xl text-sm",
    text: "Corra e ganhe carbons coins!",
  };

  const forSection = "flex flex-col relative w-full h-auto  min-w-56 bg-black lg:px-20 lg:py-40 md:px-30 md:py-30 md:gap-5 gap-10 px-10 py-20";

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [carbonsCoins, setCarbonsCoins] = useState(0);

  useEffect(() => {
    try {
      const emailSalvo = localStorage.getItem("email");

      if (emailSalvo) {
        setEmail(emailSalvo);
        const dadosUsuario = localStorage.getItem(emailSalvo);

        if (dadosUsuario) {
          const usuario = JSON.parse(dadosUsuario);
          setNome(usuario.nome);
          setTotalSeconds(usuario.totalSeconds || 0);
          setCarbonsCoins(usuario.carbonsCoins || 0);
        }
      }
    } catch (error) {
      console.error("Erro ao acessar o localStorage: ", error);
    }
  }, []);

  const calcularCarbons = (totalSeconds) => {
    const emissionCarbonoSecund = 0.04;
    const novosCarbonsCoins = totalSeconds * (Math.LOG10E * emissionCarbonoSecund);

    return novosCarbonsCoins;
  };

  const handleFinish = (totalSeconds) => {
    const novosCarbons = calcularCarbons(totalSeconds);
    const novoSaldo = carbonsCoins + novosCarbons;

    setCarbonsCoins(novoSaldo);

    const emailLogado = localStorage.getItem("email");
    if (emailLogado) {
      const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
      const dadosAtualizados = {
        ...dadosUsuario,
        totalSeconds: dadosUsuario.totalSeconds + totalSeconds,
        carbonsCoins: novoSaldo,
      };

      localStorage.setItem(emailLogado, JSON.stringify(dadosAtualizados));
      console.log(`Novo saldo de Carbons Coins: ${novoSaldo}`);
    };
  };

  return (
    <Sections sectionStyle={forSection}>
      <div className="w-full flex flex-col md:gap-5 gap-10 sm:flex-row justify-between items-start">
        <div>
          <h2 className="text-white w-full font-russo lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:pb-5 md:py-4 sm:py-3 py-2">
            Bora correr piloto, <span className="text-primary-color">{nome}</span>!
          </h2>
          <Explication style={textAndStyleExplication.style} text={textAndStyleExplication.text} />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-russo lg:text-2xl md:text-xl sm:text-lg text-sm">
            Saldo Carbons Coins: <span className="text-primary-color">{carbonsCoins.toFixed(2)}</span> pts
          </p>
          <button 
            type="button" 
            onClick={() => window.open("https://www.fiaformulae.com/pt-br", "_blank")} 

            className='w-2/3 md:w-full bg-red-700 text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-red-700 hover:bg-white hover:text-red-700 border-2 sm:py-3 sm:px-5 md:py-4 md:px-6 px-0 py-2 shadow-[0_0_10px_#b91c1c] hover:shadow-[0_0_15px_#b91c1c] transition duration-500 ease-in-out'>
              
            Trocar Carbons
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="h-auto bg-[#0000ff] bg-opacity-50 backdrop-blur-lg rounded-3xl p-6 shadow-lg">
          <Contador onFinish={handleFinish} />
        </div>

        <div className="w-full">
          <PistasCard />
        </div>

      </div>
    </Sections>
  );
}