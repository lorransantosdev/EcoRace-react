import { useNavigate } from "react-router-dom";

export default function BuildCard({ advantagen }){

    const navigate = useNavigate();

    return(
        <>
        {
            advantagen.map(advantagens => (
                <div className="bg-white bg-opacity-0 rounded-xl p-5 flex flex-col items-center text-center shadow-[0_0_25px_#0000ff] backdrop-blur-lg">
                    <h3 className="text-primary-color font-russo font-semibold md:text-2xl text-xl lg:py-5 md:py-4 sm:py-3 py-2">{advantagens.title}</h3>
                    <p className="text-white font-roboto sm:text-lg text-sm mb-4">
                    {advantagens.text}
                    </p>
                    <button onClick={() => navigate(advantagens.link)} className="bg-[#0000ff] font-roboto text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition shadow-[0_0_10px_#0000ff]">
                    {advantagens.textButton}
                    </button>
                </div>
            ))
        }
        </>
    );
}