export default function Subtitle({ text }){

    return(
        <>
            <h2 className='text-white font-russo lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:py-5 md:py-4 sm:py-3 py-2'>
                {text}
            </h2>
        </>
    );
}