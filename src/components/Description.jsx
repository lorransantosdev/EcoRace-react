export default function Description( { forDescription } ){

    return(
        <>
        {
            forDescription.map(description =>(

                <p className="text-white font-roboto lg:text-2xl md:text-xl sm:text-lg text-sm lg:py-5 md:py-4 sm:py-3 py-2">
                    {description.text}
                </p>
            ))
        }
        </>
    )
}