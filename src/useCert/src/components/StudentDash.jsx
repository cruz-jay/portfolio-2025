import { useState, useEffect } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import styles from "./StudentDash.module.css";
import RegistrationModal from "./RegistrationModal";
import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";

function StudentDash() {
  const [userData, setUserData] = useState(null);
  const [availableExams, setAvailableExams] = useState([]);
  const [userRegistrations, setUserRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [dateFilter, setDateFilter] = useState("all");
  const [examTypeFilter, setExamTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const getFilteredRegistrations = () => {
    return userRegistrations.filter((reg) => {
      const examDate = new Date(reg.exam.date);
      const now = new Date();

      // Date filter
      if (dateFilter === "upcoming" && examDate < now) return false;
      if (dateFilter === "past" && examDate >= now) return false;

      // Exam type filter
      if (examTypeFilter !== "all" && reg.exam.title !== examTypeFilter)
        return false;

      // Search query
      if (
        searchQuery &&
        !reg.exam.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  // Format date and time helper function
  const formatDateTime = (date, time) => {
    const examDate = new Date(date);
    const formattedDate = examDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Format time (assuming time is in HH:MM:SS format)
    const [hours, minutes] = time.split(":");
    const formattedTime = new Date().setHours(hours, minutes);
    const timeString = new Date(formattedTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate} at ${timeString}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [profileRes, examsRes, registrationsRes] = await Promise.all([
          api.get("/api/user-profile/", { headers }),
          api.get("/api/exams/", { headers }),
          api.get("/api/exam-registrations/", { headers }),
        ]);

        setUserData(profileRes.data);
        setAvailableExams(examsRes.data);
        setUserRegistrations(registrationsRes.data);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRegistrationClick = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);
  };

  const handleConfirmRegistration = async () => {
    try {
      //   // First send the email
      //   await emailjs.send(
      //     "service_akmb85o",
      //     "template_muoa5po",
      //     {
      //       to_email: userData.email,
      //       user_name: `${userData.first_name} ${userData.last_name}`,
      //       exam_title: selectedExam.title,
      //       exam_date: new Date(selectedExam.date).toLocaleDateString(),
      //       exam_time: selectedExam.start_time,
      //       exam_location: `${selectedExam.location.campus} - ${selectedExam.location.building} Room ${selectedExam.location.room_number}`,
      //     },
      //     "NpIV9etuoxhTLmpK-"
      //   );

      // Then handle the registration
      const token = localStorage.getItem(ACCESS_TOKEN);
      await api.post(
        "/api/exam-registrations/",
        { exam_id: selectedExam.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update the local state
      const [registrationsRes, examsRes] = await Promise.all([
        api.get("/api/exam-registrations/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        api.get("/api/exams/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setUserRegistrations(registrationsRes.data);
      setAvailableExams(examsRes.data);

      // Close the modal
      setShowModal(false);
      setSelectedExam(null);

      // Finally navigate to confirmation
      navigate("useCert/registration-confirmation", {
        state: {
          exam: selectedExam,
          userData: userData,
        },
      });
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message || "Failed to complete registration"
      );
      setShowModal(false);
      setSelectedExam(null);
    }
  };

  const handleCancellation = async (registrationId) => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      await api.delete(`/api/exam-registrations/${registrationId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Refresh both registrations and available exams
      const [registrationsRes, examsRes] = await Promise.all([
        api.get("/api/exam-registrations/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        api.get("/api/exams/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setUserRegistrations(registrationsRes.data);
      setAvailableExams(examsRes.data);
    } catch (err) {
      setError("Failed to cancel registration");
    }
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!userData) return <div>No user data found</div>;
  const filteredRegistrations = getFilteredRegistrations();

  return (
    <div className={styles.dash}>
      <div className={styles.left}>
        <ul className={styles.nav_list}>
          <li>
            <i className="bx bx-user"></i>
            <span>
              Welcome, {userData.first_name} {userData.last_name}
            </span>
          </li>
          <li>
            <i className="bx bx-book"></i>
            <span>Degree Major: {userData.major}</span>
          </li>
          <li>
            <i className="bx bx-building"></i>
            <span>Primary Campus: {userData.campus}</span>
          </li>
          <li>
            <i className="bx bx-envelope"></i>
            <span>Email: {userData.email}</span>
          </li>
        </ul>
        <div className={styles.searchSection}>
          <h3>Search Registrations</h3>
          <select
            className={styles.filter}
            onChange={(e) => setDateFilter(e.target.value)}
            defaultValue="all">
            <option value="all">All Dates</option>
            <option value="upcoming">Upcoming Exams</option>
            <option value="past">Past Exams</option>
          </select>

          <select
            className={styles.filter}
            onChange={(e) => setExamTypeFilter(e.target.value)}
            defaultValue="all">
            <option value="all">All Types</option>
            {Array.from(new Set(availableExams.map((exam) => exam.title))).map(
              (title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              )
            )}
          </select>

          <input
            type="text"
            placeholder="Search exams..."
            className={styles.searchInput}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.section}>
          <h2>Your Exam Registrations</h2>
          {filteredRegistrations.length === 0 ? (
            <p className={styles.no_data}>No matching registrations found</p>
          ) : (
            <div className={styles.exam_grid}>
              {filteredRegistrations.map((reg) => (
                <div key={reg.id} className={styles.exam_card}>
                  <h3>{reg.exam.title}</h3>
                  <p>{formatDateTime(reg.exam.date, reg.exam.start_time)}</p>
                  <button
                    onClick={() => handleCancellation(reg.id)}
                    className={styles.cancel_btn}>
                    Cancel Registration
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h2>Available Exams</h2>
          {availableExams.length === 0 ? (
            <p className={styles.no_data}>No available exams</p>
          ) : (
            <div className={styles.exam_grid}>
              {availableExams
                .filter(
                  (exam) =>
                    exam.current_booked < exam.capacity &&
                    !userRegistrations.some((reg) => reg.exam.id === exam.id) &&
                    userRegistrations.length < 3
                )
                .map((exam) => (
                  <div key={exam.id} className={styles.exam_card}>
                    <h3>{exam.title}</h3>
                    <p>{formatDateTime(exam.date, exam.start_time)}</p>
                    <p>
                      Location: {exam.location.campus} -{" "}
                      {exam.location.building} {exam.location.room_number}
                    </p>
                    <p>
                      Available seats: {exam.capacity - exam.current_booked}
                    </p>
                    <button
                      onClick={() => handleRegistrationClick(exam)}
                      className={styles.register_btn}
                      disabled={exam.current_booked >= exam.capacity}>
                      Register
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {showModal && selectedExam && (
        <RegistrationModal
          exam={selectedExam}
          userData={userData}
          onConfirm={handleConfirmRegistration}
          onCancel={() => {
            setShowModal(false);
            setSelectedExam(null);
          }}
        />
      )}
    </div>
  );
}

export default StudentDash;
