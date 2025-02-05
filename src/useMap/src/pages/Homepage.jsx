// import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import "../styles.css";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      {/* <PageNav /> */}
      <section>
        <h1>
          Exploring My World, One Destination at a Time
          <br />
        </h1>
        <h2>
          This is my journey—every place I’ve set foot, pinned on a map. From
          bustling cities to hidden gems
        </h2>
        <Link to="/useMap/app" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
