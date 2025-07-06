"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const experience = [
  {
    role: "Cloud Computing Virtual Internship",
    company: "Blackbuck Engineers Pvt Ltd",
    period: "June 2025 - July 2025 (Virtual)",
    description:
      "Gained hands-on experience in cloud computing concepts and AWS services. Worked on deploying applications using AWS EC2, S3, and IAM. Learned about cloud security, scalability, and DevOps practices.",
    tech: ["AWS", "EC2", "S3", "IAM", "Cloud Computing", "DevOps"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Blackbuck Engineers Pvt Ltd",
    period: "June 2024 - July 2024 (Virtual)",
    description:
      "Developed full-stack web applications using React.js for frontend and Node.js with MongoDB for backend. Focused on building secure, scalable interfaces and RESTful APIs. Practiced deployment and version control workflows.",
    tech: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
  },
  {
    role: "Cloud Virtual Internship",
    company: "AWS & Eduskills",
    period: "Jan 2024 - Mar 2024 (Virtual)",
    description:
      "Gained hands-on experience with AWS cloud services including EC2, S3, Lambda, and IAM. Worked on cloud architecture, deployment automation, and secure resource management. Explored scalability, elasticity, and monitoring tools within AWS.",
    tech: ["AWS", "EC2", "S3", "Lambda", "IAM", "CloudWatch"],
  },
  {
    role: "AI & ML Virtual Internship",
    company: "AWS & Eduskills",
    period: "Oct 2023 - Dec 2023 (Virtual)",
    description:
      "Worked on real-world AI/ML problems using AWS SageMaker and Python. Developed, trained, and deployed machine learning models. Learned model evaluation techniques and best practices for working with structured data.",
    tech: ["Python", "AWS SageMaker", "Machine Learning", "Pandas", "Scikit-learn"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Roles I've taken up and skills I've developed through professional and virtual experiences.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/50" />

        {/* Timeline Cards */}
        <div className="flex flex-col gap-16 relative z-10">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative w-full flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {!isLeft && <div className="hidden md:block md:w-1/2" />}

                {/* Timeline Dot */}
                <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-20 border-4 border-white dark:border-gray-900" />

                {/* Card */}
                <div className="md:w-1/2">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2 md:mb-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                          <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-base font-medium text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                        <ul className="flex flex-wrap gap-2 text-sm text-blue-600 mt-2">
                          {exp.tech.map((tech, idx) => (
                            <li key={idx} className="bg-blue-100 px-2 py-1 rounded">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {isLeft && <div className="hidden md:block md:w-1/2" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
