"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

import spotify from "@/assets/spotify.png"
import aiPdf from "@/assets/aiPdf.png"
import todo from "@/assets/todo.png"
import queue from "@/assets/queue.png"
import aitrip from "@/assets/aitrip.png"
import wheather from "@/assets/weather.png"
import dt from "@/assets/dt.png"
import prep from "@/assets/prep.png"

const projectCategories = [
  { id: "all", title: "All" },
  { id: "web", title: "Web Development" },
  { id: "ml", title: "Machine Learning" },
  { id: "others", title: "Others" },
]

const projects = [
  {
    name: "Spotify Clone",
    description:
      "A full-featured music streaming platform built with the MERN stack and Cloudinary. Users can stream songs, manage playlists, and browse albums.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    image: spotify,
    github: "https://github.com/harish-pasupuleti/Spotify-Clone",
    category: "web",
  },
  {
    name: "AI PDF Summarizer",
    description:
      "An AI-powered tool using Gemini API that summarizes PDFs. Upload PDFs to receive concise summaries. Built with Next.js.",
    tags: ["Next.js", "Gemini API", "AI"],
    image: aiPdf,
    github: "https://github.com/harish-pasupuleti/AI_Pdf_Summary",
    category: "web",
  },
  {
    name: "TripNest AI",
    description:
      "A smart travel planner using React, Firebase, and Gemini API. Users receive personalized itineraries based on preferences.",
    tags: ["React", "Firebase", "Gemini API"],
    image: aitrip,
    github: "https://github.com/harish-pasupuleti/aiTrip",
    category: "web",
  },
  {
    name: "Q-Free - Queue Management",
    description:
      "A real-time digital token system using Socket.io. Avoid physical queues in banks, clinics, etc.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: queue,
    github: "https://github.com/harish-pasupuleti/queue-management",
    category: "web",
  },
  {
    name: "Chat App",
    description:
      "A real-time chat app with Firebase authentication. Clean UI and instant messaging.",
    tags: ["React.js", "Firebase", "Tailwind CSS"],
    image: "/projects/chatapp.png",
    github: "https://github.com/harish-pasupuleti/ChatApp",
    category: "web",
  },
  {
    name: "PrepInsights Blog",
    description:
      "A MERN stack blog platform with authentication, post creation, and admin control.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: prep,
    github: "https://github.com/harish-pasupuleti/prepInsights",
    category: "web",
  },
  {
    name: "URL Shortener",
    description:
      "A backend project that shortens long URLs. Built with Node.js and MongoDB.",
    tags: ["Node.js", "MongoDB", "Express"],
    image: "/projects/url-shortener.png",
    github: "https://github.com/harish-pasupuleti/url-shortener",
    category: "web",
  },
  {
    name: "Live Weather App",
    description:
      "Check real-time weather info using OpenWeatherMap API. Built with React.",
    tags: ["React", "API"],
    image: wheather,
    github: "https://github.com/harish-pasupuleti/weather-react",
    category: "web",
  },
  {
    name: "Todo Manager",
    description:
      "A task manager using React. Supports add/edit/delete with localStorage.",
    tags: ["React"],
    image: todo,
    github: "https://github.com/harish-pasupuleti/Todo",
    category: "web",
  },
  {
    name: "DataChat Agent",
    description:
      "Chat with CSVs using NVIDIA Nemotron LLM. Built with Streamlit and Pandas.",
    tags: ["Python", "NVIDIA LLM", "Streamlit", "Pandas", "AI"],
    image: dt,
    github: "https://github.com/harish-pasupuleti/Data_Analysis_agent",
    category: "others",
  },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my projects across Web Development, AI, and beyond.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeFilter === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.title}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg hover:scale-[1.02] transition duration-300 h-full flex flex-col">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
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
