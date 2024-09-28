export default function Pistas({ dadosPistas }) {
    return (
      <>
        {dadosPistas.map((pistas, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-5 bg-gray-300 bg-opacity-50 backdrop-blur-lg rounded-3xl p-4">
            <div className="md:w-1/5 lg:w-2/5 w-full">
              <img src={pistas.img} alt={pistas.alt} className="rounded-3xl" />
            </div>
  
            <div className="flex flex-col">
              <h3 className="text-primary-color font-russo pb-5 sm:text-2xl text-xl">{pistas.name}</h3>
              <p className="text-white font-roboto sm:text-xl text-sm">{pistas.time}</p>
              <p className="text-white font-roboto sm:text-xl text-sm">{pistas.extetion}</p>
              <p className="text-yellow-400 font-russo sm:text-xl text-lg">{pistas.seuTempo}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  