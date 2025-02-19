import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const BASE_URL =
  "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218//testing-img.json";

const CitiesContext = createContext();

function NewCitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Failed to fetch cities data");

        const data = await res.json();

        // Normalize data structure and validate cities
        const citiesArray = Array.isArray(data)
          ? data
          : data.cities
          ? data.cities
          : Object.values(data);

        // Validate and clean city data
        const validCities = citiesArray
          .map((city) => ({
            ...city,
            images: Array.isArray(city.images)
              ? city.images.filter(Boolean)
              : [],
            date: city.date
              ? new Date(city.date).toISOString()
              : new Date().toISOString(),
            position: city.position || { lat: 0, lng: 0 },
          }))
          .filter(
            (city) =>
              city.cityName &&
              city.id &&
              typeof city.position.lat === "number" &&
              typeof city.position.lng === "number"
          );

        setCities(validCities);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching cities:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  function getCity(id) {
    return cities.find((city) => city.id === id) || null;
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        setCurrentCity,
        getCity,
      }}>
      {children}
    </CitiesContext.Provider>
  );
}

function UseCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("UseCities must be used within a CitiesProvider");
  }
  return context;
}

export { UseCities, NewCitiesProvider };
