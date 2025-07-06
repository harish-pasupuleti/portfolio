"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "S R K R Engineering College",
    period: "2022 - 2026",
    gpa: "9.08 GPA",
    description:
      "Focused on software engineering, data structures, algorithms, and machine learning. Active participant in coding competitions and technical events.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "SASI Junior College",
    period: "2020 - 2022",
    gpa: "95.3%",
    description:
      "Specialized in Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.",
  },
   {
    degree: "SSC ",
    institution: "SASI English Medium High School",
    period: "2019 - 2020",
    gpa: "99%",
    description:
      "Completed secondary education with a focus on foundational subjects. Achieved high marks in all subjects, laying a strong academic foundation.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/50" />

        {/* Timeline Cards */}
        <div className="flex flex-col gap-16 relative z-10">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative w-full flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Empty side */}
                {!isLeft && <div className="hidden md:block md:w-1/2" />}

                {/* Timeline Dot */}
                <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-20 border-4 border-white dark:border-gray-900" />

                {/* Card */}
                <div className="md:w-1/2">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2 md:mb-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-lg font-medium text-primary">{edu.institution}</p>
                        <p className="text-lg font-semibold text-green-600">{edu.gpa}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty side */}
                {isLeft && <div className="hidden md:block md:w-1/2" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
