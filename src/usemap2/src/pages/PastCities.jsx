import CityItem from "./core/CityItem.jsx";
import { UseCities } from "../Context/Data.jsx";

function PastCities() {
  const { cities, isLoading } = UseCities();

  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div
      className="h-full overflow-y-auto
      [&::-webkit-scrollbar]:w-3
      [&::-webkit-scrollbar-track]:bg-[#002E2C]
      [&::-webkit-scrollbar-thumb]:bg-[#A2A77F]
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:hover:bg-[#EFF1C5]">
      <ul className="grid grid-cols-2 gap-4 pb-4 pr-2">
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default PastCities;
