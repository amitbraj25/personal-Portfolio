import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Wrench, Globe, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "Themeleaf", level: 65, category: "frontend" },
        { name: "JavaScript", level: 50, category: "frontend" },
        { name: "HTML5", level: 65, category: "frontend" },
        { name: "CSS3", level: 60, category: "frontend" },
        { name: "Bootstrap", level: 60, category: "frontend" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Java", level: 95, category: "backend" },
        { name: "Spring Boot", level: 70, category: "backend" },
        {name: "Spring MVC", level: 80, category: "backend"},
        {name: "Hibernate", level: 90, category: "backend"},
        { name: "REST APIs", level: 90, category: "backend" },
        { name: "Microservices", level: 65, category: "backend" },
        { name: "WebSocket", level: 75, category: "backend" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Globe size={24} />,
      description: "Managing data and deploying scalable applications",
      skills: [
        { name: "MongoDB", level: 45, category: "database" },
        { name: "PostgreSQL", level: 70, category: "database" },
        { name: "MySQL", level: 90, category: "database" },
        { name: "Amazon EC2", level: 70, category: "database" },
        { name: "Oracle CLoud", level: 70, category: "database" },
        { name: "Google Cloud", level: 50, category: "database" },
        { name: "Firebase", level: 60, category: "database" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      description: "Creating cross-platform mobile applications",
      skills: [
        { name: "Flutter", level: 45, category: "mobile" },
        { name: "Java", level: 70, category: "mobile" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench size={24} />,
      description: "Development tools and deployment processes",
      skills: [
        { name: "Eclipse IDE", level: 80, category: "tools" },
        { name: "Netbeans", level: 65, category: "tools" },
        { name: "VS Code", level: 75, category: "tools" },
        { name: "Linux", level: 80, category: "tools" },
        { name: "Jira", level: 60, category: "tools" },
        { name: "CI/CD", level: 65, category: "tools" }
      ]
    },
    {
      title: "Emerging Tech",
      icon: <Brain size={24} />,
      description: "Exploring cutting-edge technologies and AI",
      skills: [
        { name: "Machine Learning", level: 60, category: "emerging" },
        { name: "Web", level: 50, category: "emerging" },
        { name: "Ai", level: 45, category: "emerging" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'from-green-500 to-green-600';
    if (level >= 70) return 'from-blue-500 to-blue-600';
    if (level >= 60) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getSkillLabel = (level: number) => {
    if (level >= 80) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

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
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with.
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">0-1</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Passion for Learning</div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.level >= 80 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : skill.level >= 70
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : skill.level >= 60
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {getSkillLabel(skill.level)}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and methodologies to stay at the forefront of software development. 
            Currently diving deeper into AI/ML, cloud architecture, and advanced React patterns.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;