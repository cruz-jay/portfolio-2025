// components/RegistrationModal.jsx
import styles from "./RegistrationModal.module.css";

function RegistrationModal({ exam, userData, onConfirm, onCancel }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Confirm Exam Registration</h2>

        <div className={styles.examDetails}>
          <h3>Exam Information</h3>
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
        </div>

        <div className={styles.studentDetails}>
          <h3>Student Information</h3>
          <p>
            <strong>Name:</strong> {userData.first_name} {userData.last_name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Confirm Registration
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
