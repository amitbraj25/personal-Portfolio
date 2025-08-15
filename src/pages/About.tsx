import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Coffee, Music, Camera, Gamepad2 } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: <Code size={24} />, label: 'Coding' },
    { icon: <Coffee size={24} />, label: 'Coffee' },
    { icon: <Music size={24} />, label: 'Music' },
    { icon: <Camera size={24} />, label: 'Photography' },
    { icon: <Gamepad2 size={24} />, label: 'Gaming' },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      period: "2021 - 2025",
      gpa: "7.25",
      relevant: ["Data Structures & Algorithms", "Software Architecture", "Database Systems", "Web Development"]
    },
    {
      degree: "Senior Secondary Certificate",
      institution: "Shri Cloth Market Vaishnav Higher Secondry School",
      period: "2021",
      certification: "CBSE",
      relevant: ["PCM"]
    },
    {
      degree: "High School Certificate",
      institution: "Shri Cloth Market Vaishnav Higher Secondry School",
      period: "2017",
      certification: "CBSE",
      relevant: ["Core "]
    }
  ];

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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my background, education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate software engineering student with a love for creating innovative 
                solutions and building meaningful digital experiences. My journey in technology 
                began in high school when I built my first website, and I've been hooked ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my degree in Software Engineering, I've gained extensive experience 
                in full-stack development, working with modern technologies like Java, Spring, 
                Hibernate, and various databases. I'm particularly interested in web development, 
                machine learning, and user experience design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and community involvement. 
                I believe in continuous learning and staying up-to-date with the ever-evolving tech landscape.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full"
                  >
                    <div className="text-blue-600 dark:text-blue-400">
                      {interest.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-96 ">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQE9UVYiq3QtmQ/profile-displayphoto-shrink_800_800/B56ZbzGQNsGoAk-/0/1747835225494?e=1757548800&v=beta&t=lhSd9S7jh1BSRlIdoqG1Qt_W4PQpYWe-wFaAuazSZ5Q"
                  alt="Professional photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute"></div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span>{edu.period}</span>
                      {edu.gpa && <span>CGPA: {edu.gpa}</span>}
                      {edu.certification && <span>{edu.certification}</span>}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Career Goals
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm seeking opportunities to work with innovative teams on challenging projects 
              that make a real impact. My goal is to become a versatile full-stack developer 
              who can bridge the gap between technical excellence and user-centered design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm particularly interested in roles that involve modern web technologies, 
              cloud computing, and emerging technologies like AI and machine learning. 
              I'm always eager to learn, grow, and contribute to meaningful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;