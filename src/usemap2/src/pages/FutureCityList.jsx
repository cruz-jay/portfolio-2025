import FutureCityItem from "./core/FutureCityItem.jsx";
import { UseFutureCities } from "../Context/Data_two.jsx";

function FutureCityList() {
  const { cities, isLoading } = UseFutureCities();

  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="h-full overflow-y-auto pt-8">
      <ul className="grid grid-cols-2 gap-4 pb-4">
        {cities.map((city) => (
          <FutureCityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default FutureCityList;
