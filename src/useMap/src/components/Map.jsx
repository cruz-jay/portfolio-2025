import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UseCities } from "../contexts/CitiesContext";
// import { click } from "@testing-library/user-event/dist/click";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../Hooks/useGeo";

function Map() {
  const { cities } = UseCities();

  const [mapPosition, setMapPosition] = useState([36.1699, 2.1398]);

  const [searchParams, setSearch] = useSearchParams();

  const { isLoading: isLoadingPos, position } = useGeolocation();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // useEffect(
  //   function () {
  //     if (lat && lng) setMapPosition([lat, lng]);
  //   },
  //   [lat, lng]
  // );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        // center={[lat, lng]}
        zoom={3.1}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}>
            <Popup>
              <div>{city.notes}</div>
              <br />
              <div>{city.emoji}</div>
              <div>{city.cityName}</div>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={[lat || 36.1699, lng || 2.1398]} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
