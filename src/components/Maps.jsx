import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const Maps = () => {
  const [map, setMap] = useState(null);
  const [searchBoxA, setSearchBoxA] = useState(null);
  const [pointA, setPointA] = useState({ lat: -23.5648291, lng: -46.6525393 });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const onMapLoad = (map) => {
    setMap(map);
    map.panTo(pointA); 
    console.log("Mapa carregado e centralizado na FIAP Paulista.");
  };

  const onLoadA = (ref) => {
    setSearchBoxA(ref);
    console.log("Caixa de busca carregada.");
  };

  const onPlacesChangedA = () => {
    if (searchBoxA) {
      const places = searchBoxA.getPlaces();
      const place = places && places[0];
      if (place && place.geometry && place.geometry.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setPointA(location);
        map?.panTo(location);
        console.log("Localização inicial definida pelo usuário:", location);
      } else {
        console.log("Nenhum local encontrado.");
      }
    }
  };

  const searchNearbyPlaces = () => {
    if (!pointA || !map) {
      console.log("Localização inicial ou mapa não definidos.");
      return;
    }

    console.log("Buscando locais de impressão 3D próximos a:", pointA);

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: pointA,
      radius: 3000,
      keyword: "Impressão 3d",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setNearbyPlaces(results);
        console.log("Locais encontrados:", results);
      } else {
        console.error("Erro ao buscar locais próximos:", status);
        if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
          alert("Nenhum local de impressão 3D encontrado na área.");
        } else if (status === window.google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
          alert("Limite de consultas da API excedido. Tente novamente mais tarde.");
        } else if (status === window.google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
          alert("Solicitação negada. Verifique as permissões da chave de API.");
        } else {
          alert("Erro ao buscar locais próximos. Consulte o console para mais detalhes.");
        }
      }
    });
  };

  return (
    <div className="w-full h-screen">
      <LoadScript
        googleMapsApiKey={"AIzaSyAJNM1vawS5nO5bdFHcwZxChKJBBbYK-2Q"}
        libraries={["places"]}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={pointA}
          zoom={15}
        >
          <div className="box-border w-60 p-3 flex flex-col justify-center bg-white bg-opacity-80 rounded-md shadow-md text-sm absolute -ml-30 mt-12">
            <StandaloneSearchBox onLoad={onLoadA} onPlacesChanged={onPlacesChangedA}>
              <input
                className="box-border border border-transparent w-full h-8 mb-2 px-3 rounded shadow-md text-sm outline-none text-ellipsis"
                placeholder="Digite sua localização"
              />
            </StandaloneSearchBox>
            <button
              onClick={searchNearbyPlaces}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Buscar Impressão 3D Próxima
            </button>
          </div>

          {pointA && <Marker position={pointA} />}

          {nearbyPlaces.map((place, index) => (
            <Marker
              key={index}
              position={{
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              }}
              title={place.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
