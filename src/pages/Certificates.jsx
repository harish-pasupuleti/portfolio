"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    skills: ["Data Cleaning", "SQL", "R", "Data Visualization"],
    link: "https://drive.google.com/file/d/171P1Mr3_RooBWJ4nXqvbYaEacdR3qnUs/view?usp=sharing",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    skills: ["Azure ML", "AI Models", "Responsible AI", "Cloud Basics"],
    link: "https://drive.google.com/file/d/1BvK8nnixi1xPEKBBo9cCE-liiE8w7koR/view?usp=sharing",
  },
  {
    title: "Data Science for Engineers - NPTEL (Swayam)",
    skills: ["Statistics", "Data Mining", "Python", "Machine Learning"],
    link: "https://drive.google.com/file/d/1V-9TAh0sSVaA_7mVpUNqRXlaVg7grtX9/view?usp=sharing",
  },
  {
    title: "Introduction to Front-End Development - Coursera",
    skills: ["HTML", "CSS", "JavaScript", "Web Development Basics"],
    link: "https://drive.google.com/file/d/1q2NKAzkLKckJi4WDMdQjg3Rgx0o_lAHp/view?usp=sharing",
  },
  {
    title: "Foundations of Cloud, IoT and Edge Machine Learning - NPTEL (Swayam)",
    skills: ["IoT", "Edge Computing", "Cloud Basics", "ML Fundamentals"],
    link: "https://drive.google.com/file/d/1MP6NUyPESLyHohA-mIujcDbb7X0O6Cxl/view?usp=sharing",
  },
  {
    title: "Adobe GenSolve Hackathon – Top 5%",
    skills: ["Problem Solving", "Innovation", "Team Collaboration", "Prototyping"],
    link: "https://drive.google.com/file/d/1x2W-mXAKS8ACrObADr2v4C_StBNViPiP/view?usp=sharing",
  },
  {
    title: "CPA: Programming Essentials in C++ – Cisco Networking Academy",
    skills: ["C++ Programming", "OOP", "Syntax and Semantics", "STL"],
    link: "https://drive.google.com/file/d/1k2Hk_2XxDng1AwEWZIhBzTJxFnrQHHDs/view?usp=sharing",
  },
  {
    title: "PCAP: Programming Essentials in Python – Cisco Networking Academy",
    skills: ["Python Basics", "Functions", "OOP in Python", "Data Handling"],
    link: "https://drive.google.com/file/d/1w_VJ71nl0EazcRYgi7KOLUl4Wq4h3HII/view?usp=sharing",
  },
  {
    title: "Introduction to Cybersecurity – Cisco Networking Academy",
    skills: ["Cybersecurity Fundamentals", "Threats and Attacks", "Network Security", "Cyber Hygiene"],
    link: "https://drive.google.com/file/d/10OSY_k3Yjl1LqZRmf9uv4ysdpsEbnzxc/view?usp=sharing",
  },
];


export default function CertificationsSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of certifications that validate my knowledge and dedication to continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg hover:scale-[1.02] transition duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <Button
                    asChild
                    variant="default"
                    className="mt-auto w-fit"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
