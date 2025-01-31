import ProjectShowcase from "./ProjectShowcase";

const UseCertHome = () => {
  const projectData = {
    title: "CSN Certification System",
    description:
      "A comprehensive certification management system built for educational institutions. Features role-based access control, JWT authentication, and real-time exam scheduling.",
    techStack: [
      {
        name: "React + Vite",
        description: "Modern frontend framework with speedy development",
      },
      {
        name: "Django + DRF",
        description: "Robust backend with REST API support",
      },
      {
        name: "PostgreSQL",
        description: "Reliable database for exam and user data",
      },
      {
        name: "JWT Auth",
        description: "Secure authentication and authorization",
      },
      {
        name: "Railway",
        description: "Cloud deployment platform",
      },
      {
        name: "CSS Modules",
        description: "Scoped styling solution",
      },
    ],
    features: [
      {
        title: "Role-Based Access",
        description:
          "Separate interfaces for students and faculty members with appropriate permissions and views",
      },
      {
        title: "Exam Registration",
        description:
          "Students can browse available exams, register for up to 3 exams, and view their registration status",
      },
      {
        title: "Faculty Dashboard",
        description:
          "Comprehensive dashboard for faculty to manage exams, view registrations, and track student progress",
      },
      {
        title: "JWT Authentication",
        description:
          "Secure token-based authentication system with refresh token support",
      },
    ],
    demoLink: "/useCert/login",
    codePreview: `// Protected Route Implementation
const ProtectedRoute = ({ children }) => {
  const [isAuth, setAuth] = useState(null);
  const [profileComplete, setProfileComplete] = useState(null);

  useEffect(() => {
    auth().catch(() => {
      setAuth(false);
      setProfileComplete(false);
    });
  }, []);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (!profileComplete) {
    return <Navigate to="/complete-profile" />;
  }

  return children;
};`,
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseCertHome;
