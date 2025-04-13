import ProjectShowcase from "./ProjectShowcase";

function UseMap_Home() {
  const projectData = {
    title: "World Explorer",
    techStack: [
      {
        name: "React + CSS Modules",
        description: "Component-based UI with scoped styling",
      },
      {
        name: "Context API",
        description: "State management solution",
      },
      {
        name: "React Router ",
        description: "Navigation and routing",
      },
      {
        name: "Geolocation API Leaflet Maps",
        description: "User location tracking",
      },
    ],
    projectJourney: [
      {
        heading: "A Visual Journey Through My Travels",
        paragraph:
          "This project is a rework of an older version I had previously built. I upgraded the map feature by switching from Leaflet to the more modern Mapbox API. The app includes interactive pins marking the places I’ve visited, along with photos from each adventure to give a more personal and visual touch.",
      },
    ],
    codePreviews: [
      {
        code: `// Map.jsx -         
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";

function Map() {
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        // center={[lat, lng]}
        zoom={3.1}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; 
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
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
  `,
        description: "Core map functionality with Leaflet ",
      },
      {
        code: `// Geolocation.jsx
import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState();
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { position, getPosition, isLoading, error };
}
`,
        description: "Reusing Logic with Custom Hooks",
      },
    ],
    demoLink: "/useMap",
  };

  return <ProjectShowcase {...projectData} />;
}

export default UseMap_Home;
