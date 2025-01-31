import { Map, BookOpen, CheckCircle } from "lucide-react";

const ProjectCard = ({ title, description, icon: Icon, link, tech }) => (
  <a
    href={link}
    className="group relative flex flex-col p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="p-4 rounded-full bg-blue-50 w-fit mb-4 group-hover:bg-blue-100 transition-colors">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
          {item}
        </span>
      ))}
    </div>
    <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
      View Project →
    </div>
  </a>
);

const Home = () => {
  const projects = [
    {
      title: "Certification System",
      description:
        "An advanced certification and exam management system with role-based access control. Features user authentication, exam scheduling, and progress tracking.",
      icon: CheckCircle,
      link: "/showcase_1",
      tech: ["React", "Django", "JWT", "PostgreSQL"],
    },
    {
      title: "World Explorer",
      description:
        "Interactive world map application for tracking visited cities and exploring new destinations. Features dynamic markers and city information.",
      icon: Map,
      link: "/showcase_2",
      tech: ["React", "Leaflet", "REST API", "CSS Modules"],
    },
    {
      title: "x86 Assembly Quiz",
      description:
        "Educational platform for learning x86 assembly language through interactive quizzes and real-time feedback.",
      icon: BookOpen,
      link: "/showcase_3",
      tech: ["React", "Redux", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UNDER CONSTRUCTION
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MISSING: DATA MIGRATION Mysql -{`>`} Postgres ({`{ For useCert`})
            <br />
            MISSING: STYLING CSS.MODULES & TAILWIND Modules ({`{ For useX86`})
            <br />
            MISSING: SLIDES CODE SNIPPETS ({`{ For /home/*`})
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <footer className="mt-16 text-center text-gray-600"></footer>
      </div>
    </div>
  );
};

export default Home;
