import { NavLink } from "react-router-dom"
import ButtonPlay from "./ButtonPlay";

export default function Header( { textButton } ){

    const textAndStyleButtonPlay = [
        {
        style: 'bg-[#0000ff] text-white font-bold lg:text-1xl md:text-xl sm:text-lg text-sm rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 sm:py-1 sm:px-5 md:py-2 md:px-6 py-1s px-4 shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out',
        text: 'Login'
        }
    ]

    return(
        <header className="bg-transparent text-white 
        flex justify-around items-center
        absolute z-10 
        py-4 w-full
        min-w-80">
            <Link to='/' className="lg:w-1/6 md:w-1/5 w-1/4"><img src="/logo-ecorace.svg" alt="Logotipo da Eco Race" className="w-full"/></Link>

            <nav>
                <ul className="flex gap-5 lg:text-1xl md:text-xl sm:text-lg text-sm">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/manual'>Manual</NavLink></li>
                </ul>
            </nav>

            <div>
                <ButtonPlay playButton={textAndStyleButtonPlay}/>
            </div>
        </header>
    )
}