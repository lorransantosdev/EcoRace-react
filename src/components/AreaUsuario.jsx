import { useState, useEffect } from "react";
import Carbons from "./Carbons";
import Sections from "./Sections";
import Description from "./Description";
import Explication from "./Explication";

export default function AreaUsuario({ sectionStyle, text, style }) {
  const textAndStyleExplication = {
    style: "text-white font-roboto sm:text-xl text-sm",
    text: "Corra e ganhe carbons coins!",
  };

  const forSection = "flex relative w-full h-screen min-w-56 bg-black lg:px-20 lg:py-40 lg:gap-5 md:px-30 md:py-30 md:gap-5 px-10 py-20";

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      const emailSalvo = localStorage.getItem("email");

      if (emailSalvo) {
        setEmail(emailSalvo);
        const dadosUsuario = localStorage.getItem(emailSalvo);

        if (dadosUsuario) {
          const usuario = JSON.parse(dadosUsuario);
          setNome(usuario.nome);
        }
      }
    } catch (error) {
      console.error("Erro ao acessar o localStorage: ", error);
    }
  }, []);

  return (
    <Sections sectionStyle={forSection}>
      <div className="bg-[#0000ff] bg-opacity-50 backdrop-blur-lg rounded-3xl p-6 shadow-lg">
        <h2 className="text-white font-russo lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:pb-5 md:py-4 sm:py-3 py-2">
          Bem-vindo, {nome}!
        </h2>

        <Explication style={textAndStyleExplication.style} text={textAndStyleExplication.text} />

        <div className="flex flex-col gap-10">
          <Carbons />
        </div>
      </div>
    </Sections>
  );
}