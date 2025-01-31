import ProjectShowcase from "./ProjectShowcase";

const UseMapHome = () => {
  const projectData = {
    title: "World Explorer",
    description:
      "An interactive world map application that allows users to track visited cities, explore new destinations, and manage their travel experiences. Built with React and Leaflet for dynamic mapping capabilities.",
    techStack: [
      {
        name: "React + CSS Modules",
        description: "Component-based UI with scoped styling",
      },
      {
        name: "Leaflet Maps",
        description: "Interactive mapping library",
      },
      {
        name: "Supabase",
        description: "Backend and data storage",
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
        name: "Geolocation API",
        description: "User location tracking",
      },
    ],
    features: [
      {
        title: "Interactive Map",
        description:
          "Dynamic map interface with markers for visited cities and points of interest",
      },
      {
        title: "City Management",
        description:
          "Add, view, and organize visited cities with custom notes and dates",
      },
      {
        title: "Country Statistics",
        description: "Track visited countries and view travel statistics",
      },
      {
        title: "Location Services",
        description: "Current location detection and nearby city suggestions",
      },
    ],
    demoLink: "/useMap",
    codePreview: `// Cities Context Implementation
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
        const citiesArray = Array.isArray(data) ? data : 
                          data.cities ? data.cities : 
                          Object.values(data);
        setCities(citiesArray);
      } catch (err) {
        console.error("Error fetching cities:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ 
      cities: Array.isArray(cities) ? cities : [], 
      isLoading, 
      currentCity, 
      getCity 
    }}>
      {children}
    </CitiesContext.Provider>
  );
}`,
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseMapHome;
