import React, { useState } from 'react';
import { motion } from 'framer-motion';
import rgpvSP from "../media/rgpvPrjct.webp";
import yaarsP from "../media/yssrdPrjct.webp";
import brainP from "../media/brianPrjct.png";
import faceP from "../media/faceP.avif";
import noteP from "../media/noteP.png";
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  date: string;
  status: 'completed' | 'in-progress';
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "RGPV: SportsConnect",
      description: "Developed a web-based sports management system to enhance player and tournament tracking for RGPV.",
      longDescription: "Developed a web-based sports management system to enhance player and tournament tracking for RGPV. Implemented player data management, ranking algorithms, and real-time performance tracking. Designed user-friendly UI and secured backend using Java, Spring Boot, and MySQL",
      image: rgpvSP,
      technologies: ["HTML5", "CSS3","Javascript", "BootStrap", "Java EE", "MySQL"],
      category: "Full-Stack",
      demoUrl: " ",
      githubUrl: "https://github.com",
      date: "2024-01",
      status: "completed"
    },
    {
      id: 2,
      title: "Brain Tumor Detection",
      description: "Implemented a machine learning model in Python to classify brain tumor images for early diagnosis support.",
      longDescription: "Created a Python-based application leveraging machine learning for medical image classification. Processed MRI scans to detect and classify brain tumors with improved accuracy. Utilized libraries like TensorFlow, NumPy, and OpenCV for robust model training and testing.",
      image: brainP,
      technologies: ["HTML5", "CSS3", "Python"],
      category: "Machine Learning",
      demoUrl: "",
      githubUrl: "https://github.com",
      date: "2023-11",
      status: "completed"
    },
    {
      id: 3,
      title: "YAARS Society: NGO ~ Blood Bank Management",
      description: "Implemented secure user authentication, event management, and automated donation tracking. Integrated real-time notification system for upcoming blood donation drives.",
      longDescription: "Built a healthcare and community service platform for blood donation and Thalassemia support. Implemented secure user authentication, event management, and automated donation tracking. Integrated real-time notification system for upcoming blood donation drives. Tech Stack: Java, Spring Boot, MySQL, HTML, CSS, JavaScript.",
      image: yaarsP ,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Java EE", "Tomcat 10"],
      category: "Full-Stack",
      demoUrl: "",
      githubUrl: "https://github.com",
      date: "2023-09",
      status: "completed"
    },
    {
      id: 4,
      title: "Multi - Face Recognisation Application",
      description: "Built a Python-based application leveraging computer vision libraries for accurate real-time face identification.",
      longDescription: "Developed a real-time face recognition application using Python and computer vision libraries. Integrated facial feature extraction and matching algorithms for high identification accuracy. Optimized performance for secure authentication and surveillance use cases.",
      image: faceP,
      technologies: ["Python", "Scit-Learn", "Numpy", "Pandas"],
      category: "Machine Learning",
      demoUrl: "",
      githubUrl: "https://github.com",
      date: "2023-07",
      status: "completed"
    },
    {
      id: 5,
      title: "Note Tracker Application",
      description: "Developed a Spring and Hibernate-based application to efficiently create, manage, and persist user notes.",
      longDescription: "Designed and developed a note management application using Spring and Hibernate. Implemented CRUD operations with persistent storage for seamless user experience. Ensured efficient data handling and scalable architecture for long-term maintainability.",
      image: noteP,
      technologies: ["Jakarta EE", "Spring", "Hibernate", "MySQL", "HTML5/CSS3"],
      category: "Mobile",
      demoUrl: "",
      githubUrl: "https://github.com",
      date: "2023-12",
      status: "completed"
    }
  ];

  const categories = ['all', 'Full-Stack', 'Mobile', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here's a showcase of my technical projects, demonstrating my skills across various 
            technologies and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Tag size={18} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    View Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;