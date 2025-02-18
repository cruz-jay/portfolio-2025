import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
// const BASE_URL = "http://localhost:8000";
const BASE_URL =
  "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218//temp.json";
const CitiesContext = createContext();

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
        // console.log("Data from Supabase:", data); // Add this log
        const citiesArray = Array.isArray(data)
          ? data
          : data.cities
          ? data.cities
          : Object.values(data);
        // console.log("Processed cities:", citiesArray);

        setCities(citiesArray);
      } catch {
        alert("Error...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      console.error("Error fetching cities:", err); // Better error logging
      alert("Error loading cities");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function UseCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error(
      "ERROR ERROR ERROR: CitiesContext was used outside, must be in {children} "
    );
  }
  return context;
}

export { UseCities, CitiesProvider };
