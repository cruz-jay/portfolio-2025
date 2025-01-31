import styles from "./CountryList.module.css";
// vite - R / src / components / CountryList.module.css;
import Spinner from "./Spinner.jsx";
import Message from "./Message";
import CountryItem from "./CountryItem.jsx";
import { UseCities } from "../contexts/CitiesContext.jsx";

function CountryList() {
  const { cities, isLoading } = UseCities();

  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add Your Country" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
