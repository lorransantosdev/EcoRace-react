import { useState } from "react";
import Contador from "./Contador";

export default function Carbons() {
  const emissionCarbonoSecund = 0.04;
  const [carbonsCoins, setCarbonsCoins] = useState(0);

  const calcularCarbons = (totalSeconds) => {
    const emailLogado = localStorage.getItem('email');

    if (emailLogado) {
      const dadosUsuario = localStorage.getItem(emailLogado);

      if (dadosUsuario) {
        const usuario = JSON.parse(dadosUsuario);

        const saldoExistente = usuario.carbonsCoins || 0;

        const novosCarbonsCoins = totalSeconds * (Math.LOG10E * emissionCarbonoSecund);

        const saldoAtualizado = saldoExistente + novosCarbonsCoins;

        const dadosAtualizados = {
          ...usuario,
          carbonsCoins: saldoAtualizado
        };

        localStorage.setItem(emailLogado, JSON.stringify(dadosAtualizados));

        setCarbonsCoins(saldoAtualizado);

        console.log(`Novo saldo de Carbons Coins: ${saldoAtualizado}`);

      }
    }
  }; 

  return (
    <>
      <p className="text-white font-roboto font-bold lg:text-2xl md:text-xl sm:text-lg text-sm lg:py-5 md:py-4 sm:py-3 py-2">Saldo Carbons Coins: <span className="text-primary-color">{carbonsCoins.toFixed(2)}</span> pts</p>
      <Contador onFinish={calcularCarbons} />
    </>
  );
}