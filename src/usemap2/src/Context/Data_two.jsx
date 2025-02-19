import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const BASE_URL_FUTURE_CITIES =
  "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218//future_cities.json";

const FutureCityContext = createContext();

function FutureCityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL_FUTURE_CITIES);
        const data = await res.json();
        const citiesArray = Array.isArray(data)
          ? data
          : data.cities
          ? data.cities
          : Object.values(data);

        setCities(citiesArray);
      } catch {
        alert("Error...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <FutureCityContext.Provider value={{ cities, isLoading }}>
      {children}
    </FutureCityContext.Provider>
  );
}

function UseFutureCities() {
  const context = useContext(FutureCityContext);
  if (context === undefined) {
    throw new Error("ERROR ERROR ERROR ");
  }
  return context;
}

export { UseFutureCities, FutureCityProvider };
