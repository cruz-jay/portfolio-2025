import { Map, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const fadeInRight = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

const ProjectCard = ({ title, description, icon: Icon, link, tech }) => (
  <motion.div
    {...fadeInRight}
    href={link}
    className=" group relative flex flex-col p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#000]">
    <div className="p-4 rounded-full bg-[#0A0A2A] w-fit mb-1 group-hover:bg-[#11113F] transition-colors">
      <Icon className="w-8 h-8 text-[#B8860B]" />
    </div>
    <h3 className="text-xl font-bold mb-1 text-[#B8860B] font-custom ">
      {title}
    </h3>
    <p className="text-gray-300 mb-2 flex-grow font-custom3 text-lg ">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-2  ">
      {tech.map((item, index) => (
        <span
          key={index}
          className=" font-custom2 text-lg px-3 py-1 bg-[#0A0A2A] text-gray-300 rounded-full">
          {item}
        </span>
      ))}
    </div>
    <motion.a
      href={link}
      whileHover={{ x: 5 }}
      className=" font-custom2 text-lg text-[#B8860B] p-3  w-fit  hover:bg-[#0A0A2A] hover:text-[#DAA520] rounded-xl transition-colors inline-flex items-center">
      View Project →
    </motion.a>
  </motion.div>
);

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen flex flex-col justify-center font-custom relative">
    <div className="fixed top-8 right-8 text-2xl font-bold text-[#B8860B]">
      JC
    </div>
    <h1 className="text-4xl font-bold mb-4">
      Hey, I'm <span className="text-[#B8860B]">Jay</span>.
    </h1>
    <p className="text-xl text-gray-400">
      I'm a <span className="text-white">Computer Science Student</span> here at
      the University of Nevada, Las Vegas
    </p>
  </motion.div>
);

const AboutMe = () => (
  <motion.div
    {...fadeInRight}
    className="min-h-screen flex flex-col justify-center">
    <h2 className="text-2xl font-bold mb-6 font-custom">A BIT ABOUT ME</h2>
    <p className="font-custom3 text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
      I am currently a junior studying Computer Science with a strong interest
      in full-stack development and a deep eagerness to become a subject matter
      expert in the React framework.
    </p>
    <motion.a
      whileHover={{ x: 5 }}
      href="https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218//Martinez.pdf"
      className="font-custom2 text-2xl text-[#B8860B] p-3 hover:bg-[#000] hover:text-[#DAA520] rounded-xl transition-colors inline-flex items-center gap-5">
      Want to see my Resume?
      <span className="text-lg">→</span>
    </motion.a>
  </motion.div>
);
const Home = () => {
  const projects = [
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
    {
      title: "Certification System",
      description:
        "An advanced certification and exam management system with role-based access control. Features user authentication, exam scheduling, and progress tracking.",
      icon: CheckCircle,
      link: "/showcase_1",
      tech: ["React", "Django", "JWT", "PostgreSQL"],
    },
  ];

  return (
    <div className="bg-[#0A0A2A] text-gray-300">
      <div className="max-w-5xl mx-auto px-8 lg:px-20">
        <Header />
        <AboutMe />

        <motion.div {...fadeInRight} className="min-h-screen py-20">
          <h2 className="text-2xl font-bold mb-20 font-custom">PROJECTS</h2>
          <div className="grid grid-cols-1 gap-32">
            {" "}
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>

        <motion.footer
          {...fadeInRight}
          className="py-20 text-center text-gray-400">
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/cruz-jay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#B8860B] transition-colors">
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.google.com/search?sca_esv=460b7901733d8f1c&sxsrf=AHTn8zog8If-tkRxySadxgTjZV3Yk-3ZoQ:1738742417850&q=i+don%27t+have+one+lol&spell=1&sa=X&ved=2ahUKEwj6x6-hiKyLAxUrC0QIHesZBogQBSgAegQIERAB&biw=1357&bih=792&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#B8860B] transition-colors">
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:jay-cruz@outlook.com"
              className="text-gray-400 hover:text-[#B8860B] transition-colors">
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Home;
