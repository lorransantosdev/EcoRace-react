import { useNavigate } from "react-router-dom";

export default function ButtonPlay( { playButton } ){

    const navigate = useNavigate();
    
    return(
        <>
        {
            playButton.map(textButton =>(
                <button onClick={() => navigate('/login')} className={textButton.style}>
                    {textButton.text}
                </button>
            ))
        }
        </>
    );
}