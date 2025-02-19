const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function FutureCityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li className="bg-slate-900 p-3 rounded-lg flex items-center gap-4 hover:bg-slate-100 group cursor-pointer transition-colors h-full mt-2">
      <span className="text-2xl">{emoji}</span>
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

export default FutureCityItem;
