export default function LinksManual({ link }) {
    return (
        <>
        {
            link.map((links) => (
                <div 
                    className="group flex flex-col bg-transparent p-4 rounded-3xl border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 cursor-pointer"
                    onClick={() => window.open(links.search, "_blank")}
                >
                    <h3 className="text-white font-russo sm:text-xl text-lg mb-2 transition-colors duration-300 group-hover:text-black">
                        {links.title}
                    </h3>

                    <p className="text-white bg-[#0000ff] py-2 px-4 rounded-full sm:text-lg text-sm">
                        Adquirir
                    </p>
                </div>
            ))
        }
        </>
    );
}