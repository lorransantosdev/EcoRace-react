import { useState, useRef } from "react";
import Explication from "./Explication";

export default function Contador({ onFinish }) {
  const textAndStyleExplication = {
    style: "text-white font-roboto sm:text-xl text-sm",
    text: "Marque o seu tempo em cada corrida, clique em Start e corra!",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [timeDisplay, setTimeDisplay] = useState("00:00");
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    setIsLoading(true);
    intervalRef.current = setInterval(time, 1000);
  };

  const time = () => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds + 1;
      const minutes = Math.floor(newSeconds / 60);
      const secs = newSeconds % 60;
      setTimeDisplay(
        `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`
      );
      return newSeconds;
    });
  };

  const finish = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsLoading(false);

      const emailLogado = localStorage.getItem("email");
      if (emailLogado) {
        const dadosUsuario = localStorage.getItem(emailLogado);
        if (dadosUsuario) {
          const usuario = JSON.parse(dadosUsuario);
          const totalExistente = usuario.totalSeconds || 0;
          const novoTotal = totalExistente + seconds;
          const dadosAtualizados = {
            ...usuario,
            totalSeconds: novoTotal,
          };
          localStorage.setItem(emailLogado, JSON.stringify(dadosAtualizados));
          console.log("TotalSeconds atualizados:", novoTotal);
          onFinish(novoTotal);
        } else {
          console.log("Usuário não encontrado no localStorage.");
        }
      } else {
        console.log("Nenhum usuário logado.");
      }
      
      setSeconds(0);
      setTimeDisplay("00:00");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full gap-10 sm:gap-5">
      <div className="flex flex-col gap-10">
        <Explication
          style={textAndStyleExplication.style}
          text={textAndStyleExplication.text}
        />
        <div className="flex flex-col items-center gap-5">
          <div className="bg-white rounded-3xl font-russo lg:text-1xl md:text-xl sm:text-lg text-sm px-5 py-2">
            <h3>{timeDisplay}</h3>
          </div>

          <div className="flex gap-5">
            <button
              onClick={start}
              disabled={isLoading}
              className="bg-[#0000ff] text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out"
            >
              Start
            </button>

            <button
              onClick={finish}
              disabled={!isLoading}
              className="bg-red-700 text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-red-700 hover:bg-white hover:text-red-700 border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#b91c1c] hover:shadow-[0_0_15px_#b91c1c] transition duration-500 ease-in-out"
            >
              Finish
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 w-full lg:w-full md:py-20 py-5 px-5 rounded-3xl text-center">
        <h3 id="totalSeconds" className="text-white font-russo sm:text-xl text-sm">
          Seu tempo nas pistas: {seconds} s
        </h3>
      </div>
    </div>
  );
}
