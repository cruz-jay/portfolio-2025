import { useState, useEffect } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import styles from "./FacultyDash.module.css";

const FacultyDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Format date and time helper function
  const formatDateTime = (date, time) => {
    const examDate = new Date(date);
    const formattedDate = examDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

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
        const headers = { Authorization: `Bearer ${token}` };

        // Get all registrations and students
        const [examsRes, studentsRes] = await Promise.all([
          api.get("/api/exams/", { headers }),
          api.get("/api/faculty/students/", { headers }),
        ]);

        setRegistrations(examsRes.data);
        setStudents(studentsRes.data);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div>
      <div className={styles.container}>
        <h1>Faculty Dashboard</h1>

        <div className={styles.section}>
          <h2>Exam Registrations</h2>
          <div className={styles.examGrid}>
            {registrations.map((exam) => (
              <div key={exam.id} className={styles.examCard}>
                <h3>{exam.title}</h3>
                <p>{formatDateTime(exam.date, exam.start_time)}</p>
                <p>
                  Location: {exam.location.campus} - {exam.location.building}{" "}
                  Room {exam.location.room_number}
                </p>
                <p>
                  Registered Students: {exam.current_booked}/{exam.capacity}
                </p>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${(exam.current_booked / exam.capacity) * 100}%`,
                      backgroundColor:
                        exam.current_booked >= exam.capacity
                          ? "#dc3545"
                          : "#28a745",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Student Accounts</h2>
          <input
            type="text"
            placeholder="Search students..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={styles.studentGrid}>
            {filteredStudents.map((student) => (
              <div key={student.id} className={styles.studentCard}>
                <h3>
                  {student.first_name} {student.last_name}
                </h3>
                <p>Email: {student.email}</p>
                <p>Major: {student.major}</p>
                <p>Campus: {student.campus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
