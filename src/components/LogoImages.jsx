export default function LogoImagens( { logotipos } ){
    return(
        <>
        {
            logotipos.map(logos =>(
                <img src={logos.search} alt={logos.altImg} className={logos.style}/>
            ))
        }
        </>
    )
}