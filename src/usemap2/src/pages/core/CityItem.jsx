import { UseCities } from "../../Context/Data";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, setCurrentCity } = UseCities();

  function handleClick() {
    setCurrentCity(city);
  }
  return (
    <li
      onClick={handleClick}
      className={`bg-slate-900 p-3 rounded-lg flex items-center gap-4 hover:bg-slate-100 group h-full cursor-pointer
        ${city.id === currentCity?.id ? "ring-2 ring-[#291A40]" : ""}`}>
      <span className="text-2xl group-hover:text-slate-500">{emoji}</span>
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-white group-hover:text-slate-500">
          {cityName}
        </h3>
        <time className="text-sm text-white group-hover:text-slate-500">
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}
export default CityItem;
