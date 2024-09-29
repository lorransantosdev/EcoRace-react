export default function Explication({ style, text }) {

    return(
        <>
            <h2 className={style}>
                {text}
            </h2>
        </>
    );
}