import ProjectShowcase from "./ProjectShowcase";

const UseMapHome = () => {
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
        name: "React Router",
        description: "Client-side routing",
      },
      {
        name: "Geolocation API Leaflet Maps",
        description: "User location tracking",
      },
    ],
    codePreviews: [
      {
        code: `// Map Component Implementation
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ChangeCenter({ position }) {
  const map = useMap();

  useEffect(
    function () {
      map.setView(position);
    },
    [map, position]
  );

  return null;
}

function Map() {
  const [mapPosition, setMapPosition] = useState([40, -3]);
  const [cities, setCities] = useState([]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.lat, city.lng]}
            key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}`,
        description: "Core map functionality with Leaflet integration",
      },
      {
        code: `// Cities Context Implementation
import { createContext, useState, useEffect } from "react";

export const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading the cities...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(\`\${BASE_URL}/\${id}\`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading the city...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}>
      {children}
    </CitiesContext.Provider>
  );
}`,
        description: "Context API implementation for state management",
      },
      {
        code: `// Geolocation and City Form
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";

export function Form() {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false);
  const [geolocationError, setGeolocationError] = useState("");
  
  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeolocation(true);
          setGeolocationError("");
          const res = await fetch(
            \`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=\${lat}&longitude=\${lng}&localityLanguage=en\`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
        } catch (err) {
          setGeolocationError(err.message);
        } finally {
          setIsLoadingGeolocation(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );`,
        description: "Geolocation features and city form implementation",
      },
    ],
    demoLink: "/useMap",
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseMapHome;
