import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  const styleTitles = "text-2xl font-roboto mb-4";
  const styleDescriptions = "font-roboto text-gray-100";
  const styleLink = "hover:underline font-roboto text-gray-400"

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className={styleTitles}>Eco Race</h2>
            <p className={styleDescriptions}>
              Participe de uma experiência única onde você pode construir seu próprio carrinho de Fórmula E elétrico, correr em pistas e acumular Carbon Points para trocar por prêmios exclusivos.
            </p>
          </div>


          <div>
            <h2 className={styleTitles}>Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={styleLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/manual" className={styleLink}>
                  Manual
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className={styleLink}>
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link to="/login" className={styleLink}>
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styleTitles}>Contato</h2>
            <p className={styleDescriptions}>Email: contact@ecorace.com</p>
            <p className={styleDescriptions}>Telefone: (11) 98788-5083</p>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 pt-6 mt-6">
          <p className={styleDescriptions}>
            &copy; {new Date().getFullYear()} Eco Race - Todos os Direitos
            Reservados
          </p>
        </div>
        </div>
    </footer>
  );
}