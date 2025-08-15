import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Java Developer Intern",
      company: "TechnoHacks Solution",
      period: "Jan 2025 - May 2025",
      location: "Remote",
      description: [
        "Developed Java-based applications using Spring MVC, Hibernate, and MySQL.",
        "Applied OOP principles and coding best practices.",
        "Collaborated with team to gather requirements.",
        "Managed code with Git and assisted in deployments."
      ]
    }
  ];

  const achievements = [
    {
      title: "Navrachana Runnerup",
      organization: "Shri Vaishnav Vidyapeeth Vishwavidhyalaya",
      period: "November 2023",
      description: "2nd place for developing an Clap to switch on/off Light"
    },
    {
      title: "Open Source Contributor",
      organization: "Spring",
      period: "2024 - Present",
      description: "Active contributor to Spring Boot, Spring AI, and other open source projects"
    }
  ];

  const certifications = [
    "Java Foundation Certification - Infosys Springboard",
    "Meta Front-End Developer Certificate",
    "Core and Advanced Java Certification – Online School of Programming",
    "NPTEL Certification: Database Management System – IIT Kharagpur (8-week course)"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Download my resume or view it online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/src/media/Amit_Braj_Resume.pdf"
              download="Amti_Braj_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={18} />
              Download PDF
            </a>
            <a
              href="/src/media/Amit_Braj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={18} />
              View Online
            </a>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Amit Braj
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineering Student & Full-Stack Developer
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                amitbraj25@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 9993797011
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Indore, MP
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="text-blue-600 dark:text-blue-400" size={24} />
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate Software Engineering graduate with 1+ years of hands-on experience in Java-based application development.
              Proficient in core and advanced Java, Spring Framework, Hibernate, and database technologies. Experienced in building 
              scalable and efficient backend systems, integrating APIs, and deploying applications on cloud platforms. Proven track 
              record of delivering high-quality projects, contributing to collaborative team environments, and solving complex problems 
              through clean, maintainable code. Seeking opportunities to leverage Java expertise and drive innovation in software development.
            </p>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Shri Vaishnav Vidyapeeth Vishwavidyalaya
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    2021 - 2025 
                  </span>
                  <span>CGPA: 7.25</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Relevant Coursework: Data Structures & Algorithms, Software Architecture, 
                  Database Systems, Web Development, Machine Learning, Computer Networks
                </p>
              </div>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="text-blue-600 dark:text-blue-400" size={24} />
              Achievements & Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {achievement.period}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  {cert}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                 JavaScript, Java EE, HTML5, CSS3, Themeleaf
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                 Java, Spring Boot, Spring MVC, Microservices, Hibernate, REST APIs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Database & Tools</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  MongoDB, PostgreSQL, Git, Eclipse IDE,Amazon Cloud,Oracle Cloud
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;