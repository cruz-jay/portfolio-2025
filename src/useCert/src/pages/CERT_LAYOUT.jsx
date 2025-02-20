import "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import StudentDash from "../components/StudentDash";
import styles from "./Home.module.css";

function CERT_LAYOUT() {
  const navigate = useNavigate();

  function HandleLogout() {
    localStorage.clear();
    navigate("/useCert/logout");
  }

  return (
    <div>
      <Header />
      <div className={styles.logoutContainer}>
        <Button type="primary" onClick={HandleLogout}>
          Logout
        </Button>
      </div>
      <StudentDash />
      {/* <Footer /> */}
    </div>
  );
}

export default CERT_LAYOUT;
