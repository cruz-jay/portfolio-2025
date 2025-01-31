import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message";
import PropTypes from "prop-types";
import { UseCities } from "../contexts/CitiesContext.jsx";

function CityList() {
  const { cities, isLoading } = UseCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add Your City" />;

  return (
    <div>
      <ul className={styles.CityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string,
      emoji: PropTypes.string,
      date: PropTypes.string,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default CityList;
