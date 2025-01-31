/* eslint-disable no-unused-vars */
// /Users/jay/Final/src/useCert/src/components/Login.jsx
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "https://django-server-production-bd76.up.railway.app/api/token/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, password }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // Store tokens
//         localStorage.setItem("ACCESS_TOKEN", data.access);
//         localStorage.setItem("REFRESH_TOKEN", data.refresh);
//         navigate("/useCert"); // Navigate to the main cert page
//       } else {
//         setError(data.detail || "Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-wrapper">
//         <h2>Login</h2>
//         <Form onSubmit={handleSubmit}>
//           {error && <div className="error-message">{error}</div>}
//           <Form.Group className="mb-3" controlId="formBasicUsername">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100">
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;
