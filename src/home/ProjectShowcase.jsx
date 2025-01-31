import { Github, ExternalLink, Code, Database, Layout } from "lucide-react";

const ProjectShowcase = ({
  title,
  description,
  techStack,
  features,
  demoLink,
  codePreview,
  architectureImage = "/api/placeholder/800/400",
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="mr-2" /> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Layout className="mr-2" /> Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Database className="mr-2" /> Architecture Overview
          </h2>
          <img
            src={architectureImage}
            alt="Project Architecture"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Code Preview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Code Highlights</h2>
          <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code>{codePreview}</code>
          </pre>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-6">
          <a
            href={demoLink}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <ExternalLink className="mr-2" />
            Try it Live
          </a>
          <a
            href="https://github.com/yourusername/project"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
            <Github className="mr-2" />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
