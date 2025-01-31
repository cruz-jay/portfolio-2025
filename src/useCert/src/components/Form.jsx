/* eslint-disable react/prop-types */
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import styles from "./Form.module.css";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const validateInputs = () => {
    if (!username.trim()) {
      return "Username is required.";
    }
    if (!password.trim()) {
      return "Password is required.";
    }

    const usernameRegex = /^[A-Za-z]+[0-9]{4}$/; // First name + 4 digits
    const passwordRegex = /^[0-9]{10}$/; // 10 digits

    if (!usernameRegex.test(username)) {
      return "Username or Password | Incorrect Format ";
    }
    if (!passwordRegex.test(password)) {
      return "Password must be exactly 10 digits (NSHE number)";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    // console.log(
    //   "Making request to:",
    //   `${import.meta.env.VITE_API_URL}${route}`
    // );

    // console.log("API Base URL:", import.meta.env.VITE_API_URL);
    // console.log("Full Request URL:", `${import.meta.env.VITE_API_URL}${route}`);
    // console.log("Request Headers:", api.defaults.headers);

    try {
      // console.log("Attempting to send request to:", route);
      // console.log("With data:", { username, password });

      const res = await api.post(route, {
        username: username.trim(),
        password: password.trim(),
      });

      // console.log("Response received:", res.data);

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/useCert"); // Correct path
      } else {
        navigate("/useCert/login"); // Correct path
      }
    } catch (err) {
      console.error("Request failed:", err);
      console.error("Error details:", {
        status: err.response?.status,
        data: err.response?.data,
        config: err.config,
      });
      if (err.response) {
        // Server responded with error
        setError(
          err.response.data?.message || "Server error. Please try again."
        );
      } else if (err.request) {
        // Request made but no response
        setError("No response from server. Please check your connection.");
      } else {
        // Error in request setup
        setError("Failed to make request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <h1>{name}</h1>
      {error && <div className={styles["form-error"]}>{error}</div>}
      <input
        className={styles["form-input"]}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        aria-label="Username"
      />
      <input
        className={styles["form-input"]}
        // type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password (NSHE number)"
        aria-label="Password"
      />
      <button className={styles["form-button"]} disabled={loading}>
        {loading ? "Loading..." : name}
      </button>
    </form>
  );
}

export default Form;
