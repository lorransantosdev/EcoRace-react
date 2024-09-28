export default function Banner({ children }){

    return(
        <>
            <section className="flex items-center justify-around flex-col relative
            w-full min-w-80 h-screen 
            bg-custom-radial 
            sm:px-32 sm:py-60 sm:gap-5 
            px-10 py-20"> 
                {children}
            </section>
        </>
    )


}