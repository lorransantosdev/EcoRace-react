import { useState, useEffect } from 'react';

export default function Carbons({ totalSeconds, calcularCarbons }) {
  const [carbonsCoins, setCarbonsCoins] = useState(0);

  useEffect(() => {
    if (totalSeconds) {
      const novosCarbons = calcularCarbons(totalSeconds);
      setCarbonsCoins(novosCarbons);
    }
  }, [totalSeconds, calcularCarbons]);

  return (
    <p className="text-white font-roboto font-bold lg:text-2xl md:text-xl sm:text-lg text-sm lg:py-5 md:py-4 sm:py-3 py-2">
      Saldo Carbons Coins: <span className="text-primary-color">{carbonsCoins.toFixed(2)}</span> pts
    </p>
  );
}