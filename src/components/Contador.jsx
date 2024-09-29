import { useState } from "react";
import Explication from "./Explication";

export default function Contador({ onFinish }) {

  const textAndStyleExplication = {
    style: "text-white font-roboto sm:text-xl text-sm",
    text: "Marque o seu tempo em cada corrida, clique em Start e corra!",
  };

  let seconds = 0;
  let minutes = 0;
  let interval;

  const start = () => {
    interval = setInterval(time, 1000);
    return;
  };

  const time = () => {
    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 59 && seconds === 59) {
        finish();
      }
    }
    document.getElementById('time').innerText = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  };

  const finish = () => {
    clearInterval(interval);
    let totalSeconds = seconds + minutes * 60;

    const emailLogado = localStorage.getItem('email');

    if (emailLogado) {
      const dadosUsuario = localStorage.getItem(emailLogado);
  
      if (dadosUsuario) {
        const usuario = JSON.parse(dadosUsuario);

        const totalExistente = usuario.totalSeconds || 0;

        const novoTotal = totalExistente + totalSeconds;

        const dadosAtualizados = {
          ...usuario,
          totalSeconds: novoTotal
        };

        localStorage.setItem(emailLogado, JSON.stringify(dadosAtualizados));
        console.log("TotalSeconds atualizados:", novoTotal);

        onFinish(novoTotal);

      } else {
        console.log("Usuário não encontrado no localStorage.");
      }
    } else {
      console.log("Nenhum usuário logado.");
    };

    seconds = 0;
    minutes = 0;
    document.getElementById('time').innerText = "00:00";
    document.getElementById('totalSeconds').innerText = `Seu tempo nas pistas: ${totalSeconds.toFixed(2)} s`
  };

  return (
    <div className="flex flex-col justify-between items-center h-full gap-10 sm:gap-5">
      <div className="flex flex-col gap-10">
        <Explication style={textAndStyleExplication.style} text={textAndStyleExplication.text} />
        <div className="flex flex-col items-center gap-5">  
          <div className="bg-white rounded-3xl font-russo lg:text-1xl md:text-xl sm:text-lg text-sm px-5 py-2">
            <h3 id="time">00:00</h3>
          </div>

          <div className="flex gap-5">
            <button onClick={start} className="bg-[#0000ff] text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out">
              Start
            </button>

            <button onClick={finish} className="bg-red-700 text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-red-700 hover:bg-white hover:text-red-700 border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#b91c1c] hover:shadow-[0_0_15px_#b91c1c] transition duration-500 ease-in-out">
              Finish
            </button>
          </div>
        </div>
      </div>  
      
      <div className="bg-slate-700 w-full lg:w-full md:py-20 py-5 px-5 rounded-3xl text-center">  
        <h3 id="totalSeconds" className="text-white font-russo sm:text-xl text-sm">
          Seu tempo nas pistas: 0 s
        </h3>
      </div>
    </div>
  );
}