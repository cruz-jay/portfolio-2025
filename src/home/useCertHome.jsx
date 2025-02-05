import ProjectShowcase from "./ProjectShowcase";

const UseCertHome = () => {
  const projectData = {
    title: "Certification Registration System",
    techStack: [
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
    ],

    // Empty codePreviews array - you can add your own code examples
    codePreviews: [
      {
        code: "", // Add your code snippets here
        description: "", // Add your descriptions here
      },
    ],

    // Project journey challenges will be displayed from the ProjectShowcase component,
    // but you can customize them in the actual component

    demoLink: "/useCert/login",
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseCertHome;
