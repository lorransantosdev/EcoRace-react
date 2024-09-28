import { useState } from "react";

export default function Contador({ onFinish }) {
  let seconds = 0;
  let minutes = 0;
  let interval;

  const start = () => {
    interval = setInterval(time, 1000);
    return
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
    }

    seconds = 0;
    minutes = 0;
    document.getElementById('time').innerText = "00:00";
  };

  return (
    <div className=" flex flex-col items-center gap-5">
        <div className="bg-white rounded-3xl font-russo lg:text-1xl md:text-xl sm:text-lg text-sm px-5 py-2" >
            <h3 id="time">
              00:00
            </h3>
        </div>
        <div className="flex gap-5">
            <button onClick={start} className="bg-[#0000ff] text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out">
            Start</button>

            <button onClick={finish} className="bg-red-700 text-white lg:text-1xl md:text-xl sm:text-lg text-sm font-bold rounded-3xl border-red-700 hover:bg-white hover:text-red-700 border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6 shadow-[0_0_10px_#b91c1c] hover:shadow-[0_0_15px_#b91c1c] transition duration-500 ease-in-out">Finish</button>
        </div>
    </div>
  );
}