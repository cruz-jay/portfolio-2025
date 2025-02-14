import Header from "../components/Header";
import FacultyDash from "../components/FacultyDash";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./FacultyDashboard.module.css";

const FacultyDashboard = () => {
  const navigate = useNavigate();

  function HandleLogout() {
    localStorage.clear();
    navigate("useCert/logout");
  }

  return (
    <div>
      <Header />
      <div className={styles.logoutContainer}>
        <Button type="primary" onClick={HandleLogout}>
          Logout
        </Button>
      </div>
      <FacultyDash />
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyDashboard;
