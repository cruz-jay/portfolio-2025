import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectShowcase = ({
  title,
  techStack,
  demoLink,
  codePreviews,
  videoFile,
  projectJourney,
}) => {
  return (
    <div className="min-h-screen bg-[#0b2c3d] text-black py-20 px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <a href="/">
            <h1 className="text-4xl font-bold font-custom text-[#B8860B]">
              {title}
            </h1>
          </a>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}>
            <a
              href={demoLink}
              className="inline-block font-custom2 text-3xl text-[#B8860B] p-4 hover:bg-[#858d71] hover:text-[#DAA520] rounded-xl transition-all">
              View Live Demo →
            </a>
          </motion.div>
        </div>
        {/* Tech Stack */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-custom text-[#B8860B]">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-[#FFFF] p-4 rounded-xl">
                <h3 className="text-[#B8860B] font-custom2 text-lg mb-2">
                  {tech.name}
                </h3>
                <p className="text-black font-custom3">{tech.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Project Journey Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-custom text-[#B8860B]">
            Project Journey
          </h2>
          {projectJourney && (
            <div className="bg-[#FFF] rounded-xl p-6">
              <p className="text-lg font-custom3 mb-4">
                {projectJourney[0].heading}
              </p>
              <p className="space-y-4 font-custom3">
                {projectJourney[0].paragraph}
              </p>
            </div>
          )}
        </motion.div>
        {videoFile && <VideoPlayer videoFile={videoFile} />}{" "}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-custom text-[#B8860B]">
            Code Highlights
          </h2>
          <CodeCarousel codePreviews={codePreviews} />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-center">
          <a
            href={demoLink}
            className="inline-block font-custom2 text-lg text-[#B8860B] p-4 hover:bg-[#858d71] hover:text-[#DAA520] rounded-xl transition-all">
            View Live Demo →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;

// Video and CodeCarousel Components
const VideoPlayer = ({ videoFile }) => (
  <div className="mb-24">
    <video
      src={videoFile}
      autoPlay
      muted
      playsInline
      className="w-full h-auto rounded-xl"
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>
);

const CodeCarousel = ({ codePreviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === codePreviews.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? codePreviews.length - 1 : current - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl bg-[#858d71] p-6">
        <pre className="text-gray-300 overflow-x-auto">
          <code>{codePreviews[currentIndex].code}</code>
        </pre>
        <p className="text-[#000] mt-4 font-custom2 text-2xl ">
          {codePreviews[currentIndex].description}
        </p>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8860B] hover:text-[#DAA520]">
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8860B] hover:text-[#DAA520]">
        <ChevronRight size={24} />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {codePreviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-[#B8860B]" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
