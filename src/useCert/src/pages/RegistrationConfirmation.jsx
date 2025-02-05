// pages/RegistrationConfirmation.jsx
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RegistrationConfirmation.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RegistrationConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { exam, userData } = location.state || {};

  if (!exam || !userData) {
    navigate("useCert/");
    return null;
  }

  return (
    <>
      <Header />
      <div className={styles.confirmationPage}>
        <div className={styles.confirmationCard}>
          <div className={styles.successIcon}>✓</div>
          <h1>Registration Successful!</h1>

          <div className={styles.details}>
            <h2>Exam Details</h2>
            <p>
              <strong>Exam:</strong> {exam.title}
            </p>
            <p>
              <strong>Date:</strong> {new Date(exam.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {exam.start_time}
            </p>
            <p>
              <strong>Location:</strong> {exam.location.campus} -{" "}
              {exam.location.building} Room {exam.location.room_number}
            </p>

            <h2>Student Information</h2>
            <p>
              <strong>Name:</strong> {userData.first_name} {userData.last_name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>

          <button className={styles.returnButton} onClick={() => navigate("/")}>
            Return to Home
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default RegistrationConfirmation;
