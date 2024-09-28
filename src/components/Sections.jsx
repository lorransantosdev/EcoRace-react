export default function Sections( {children, sectionStyle } ){

    return(
        <>
            <section className={sectionStyle}>
                {children}
            </section>
        </>
    )
}