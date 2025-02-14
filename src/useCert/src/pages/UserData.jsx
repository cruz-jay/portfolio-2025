import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Button from "../components/Button";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { jwtDecode } from "jwt-decode";
import Header from "../components/Header";

function UserData() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    major: "",
    campus: "",
    role: "student",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // console.log("Current token details:", decoded);
        // console.log("Profile completed status:", decoded.profile_completed);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for email changes
    if (name === "email") {
      const isStaffEmail = value.endsWith("@csn.edu");
      const isStudentEmail = value.endsWith("@student.csn.edu");

      // Automatically set role based on email domain
      setFormData({
        ...formData,
        email: value,
        role: isStaffEmail
          ? "staff"
          : isStudentEmail
          ? "student"
          : formData.role,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const HandleLogout = () => {
    localStorage.clear();
    navigate("useCert/logout");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(student\.csn\.edu|csn\.edu)$/;
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.major ||
      !formData.campus ||
      !formData.role
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Email must be in the correct  ".edu" format');
      setLoading(false);
      return;
    }

    // Structure the data to match what the serializer expects
    const profileData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      major: formData.major,
      campus: formData.campus,
      role: formData.role,
    };

    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      const response = await api.post("/api/complete-profile/", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.access && response.data.refresh) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        window.location.href = "/"; // Force a full reload
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err.response?.data?.message ||
          err.response?.data?.detail ||
          "Failed to complete profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h1> New User Detected </h1>
        <h3>Complete Your Profile</h3>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="CSN Email"
          required
        />
        <input
          type="text"
          name="major"
          value={formData.major}
          onChange={handleChange}
          placeholder="Major or Department"
          required
        />
        <select
          name="campus"
          value={formData.campus}
          onChange={handleChange}
          required>
          <option value="" disabled>
            Primary Campus
          </option>
          <option value="north las vegas">North Las Vegas</option>
          <option value="charleston">Charleston</option>
          <option value="henderson">Henderson</option>
        </select>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          disabled={true} // Make it disabled since it's automatically set
        >
          {formData.email.endsWith("@csn.edu") ? (
            <option value="staff">Staff</option>
          ) : formData.email.endsWith("@student.csn.edu") ? (
            <option value="student">Student</option>
          ) : (
            <>
              <option value="" disabled>
                Select Role (Based on Email)
              </option>
              <option value="student" disabled>
                Student
              </option>
              <option value="staff" disabled>
                Staff
              </option>
            </>
          )}
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        <br></br>
        <Button type="primary" onClick={HandleLogout}>
          Logout
        </Button>
      </form>
      {/* <Footer /> */}
    </>
  );
}

export default UserData;
