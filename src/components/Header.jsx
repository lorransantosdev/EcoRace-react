import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ButtonPlay from "./ButtonPlay";

export default function Header({ textButton }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const textAndStyleButtonPlay = [
    {
      style:
        "bg-[#0000ff] text-white font-bold lg:text-1xl md:text-xl sm:text-lg text-sm rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 sm:py-1 sm:px-5 md:py-2 md:px-6 py-1 px-4 shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out",
      text: "Login",
    },
  ];

  return (
    <header className="bg-transparent text-white flex justify-between items-center py-4 w-full min-w-80 px-4 lg:px-10 absolute z-10">

      <Link to="/" className="lg:w-1/6 md:w-1/5 w-1/4">
        <img src="/logo-ecorace.svg" alt="Logotipo da Eco Race" className="w-full" />
      </Link>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>


      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-5 absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-black lg:bg-opacity-0 p-4 lg:p-0`}
        >
        <ul className="flex flex-col lg:flex-row lg:items-center gap-5 lg:text-1xl md:text-xl sm:text-lg text-sm">
          <li>
            <NavLink to="/" className="hover:text-primary-color" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/manual" className="hover:text-primary-color" onClick={() => setIsMobileMenuOpen(false)}>
              Manual
            </NavLink>
          </li>

          <li className="lg:hidden text-center">
            <ButtonPlay playButton={textAndStyleButtonPlay} />
          </li>
        </ul>
      </nav>

      <div className="hidden lg:block">
        <ButtonPlay playButton={textAndStyleButtonPlay} />
      </div>
    </header>
  );
}