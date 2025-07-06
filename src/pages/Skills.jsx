"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Icons
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"
import { BiLogoVisualStudio } from "react-icons/bi"
import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    id: "all",
    title: "All Skills",
    skills: [],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: BiLogoVisualStudio },
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: "ml",
    title: "ML Tools",
    skills: [
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Azure ML", icon: VscAzure },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
]

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const getAllSkills = () => {
    return skillCategories
      .filter((cat) => cat.id !== "all")
      .flatMap((category) =>
        category.skills.map((skill) => ({ ...skill, category: category.title }))
      )
  }

  const filteredSkills =
    activeFilter === "all"
      ? getAllSkills()
      : skillCategories
          .find((cat) => cat.id === activeFilter)
          ?.skills.map((skill) => ({
            ...skill,
            category:
              skillCategories.find((cat) => cat.id === activeFilter)?.title || "",
          })) || []

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Filter and explore the technologies I work with.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="capitalize"
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <skill.icon className="w-6 h-6 mx-auto text-primary group-hover:scale-125 transition-transform duration-200 mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {skill.name}
                  </h3>
                  {skill.category && (
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
