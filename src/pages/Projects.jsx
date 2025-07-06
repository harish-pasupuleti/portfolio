"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
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
];

const projects = [
  // 🔴 ADVANCED PROJECTS
  {
    name: "Spotify Clone",
    description:
      "A full-featured music streaming platform built with the MERN stack and Cloudinary. Users can stream songs, manage playlists, and browse albums. An admin panel enables media uploads and user management. It showcases authentication, media handling, and a fully responsive design.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    image: spotify,
    github: "https://github.com/harish-pasupuleti/Spotify-Clone",
    category: "web",
  },
  {
    name: "AI PDF Summarizer",
    description:
      "An AI-powered summarization tool built with Next.js and Gemini API. Users can upload lengthy PDFs and receive concise, intelligent summaries. This project handles file parsing, API integration, and modern UI rendering for productivity-focused users.",
    tags: ["Next.js", "Gemini API", "AI"],
    image: aiPdf,
    github: "https://github.com/harish-pasupuleti/AI_Pdf_Summary",
    category: "web",
  },
  {
    name: "TripNest AI - Smart Travel Planner",
    description:
      "An intelligent travel assistant built with React, Gemini API, and Firebase. Users enter travel preferences and receive personalized itinerary suggestions. Features secure login, AI-powered results, and a sleek, responsive design.",
    tags: ["React", "Firebase", "Gemini API"],
    image: aitrip,
    github: "https://github.com/harish-pasupuleti/aiTrip",
    category: "web",
  },
  {
    name: "Q-Free - Queue-less Management System",
    description:
      "A smart digital queue system developed using React, Node.js, MongoDB, and Socket.io. Users can book virtual tokens and receive real-time updates. Designed to eliminate physical waiting lines in offices, clinics, and banks.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: queue,
    github: "https://github.com/harish-pasupuleti/queue-management",
    category: "web",
  },

  // 🟡 INTERMEDIATE PROJECTS
  {
    name: "Chat App",
    description:
      "A real-time chat application built with React.js and Firebase. Users can send and receive messages instantly, with Firebase handling authentication and data updates. The UI is minimal, fast, and responsive.",
    tags: ["React.js", "Firebase", "Tailwind CSS"],
    image: "/projects/chatapp.png",
    github: "https://github.com/harish-pasupuleti/ChatApp",
    category: "web",
  },
  {
    name: "PrepInsights - Blog Platform",
    description:
      "A dynamic blog platform developed using the MERN stack. Supports user authentication, post management, and a dashboard interface. Ideal for bloggers or admins to manage content with ease.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: prep,
    github: "https://github.com/harish-pasupuleti/prepInsights",
    category: "web",
  },
  {
    name: " URL Shortener",
    description:
      "A backend-focused project to shorten URLs using Node.js, Express, and MongoDB. It supports creating short links, redirection, and basic usage analytics. A clean and simple UI complements the RESTful API.",
    tags: ["Node.js", "MongoDB", "Express"],
    image: "/projects/url-shortener.png",
    github: "https://github.com/harish-pasupuleti/url-shortener",
    category: "web",
  },

  // 🟢 BEGINNER PROJECTS
  {
    name: " Live Weather App",
    description:
      "A responsive weather application built with React and OpenWeatherMap API. Users can search cities and view real-time weather details including temperature, wind, and humidity.",
    tags: ["React", "API"],
    image: wheather,
    github: "https://github.com/harish-pasupuleti/weather-react",
    category: "web",
  },
  {
    name: "Todo Manager",
    description:
      "A simple task management app created with React. Supports adding, editing, completing, and deleting tasks with persistent storage using localStorage. Great for demonstrating React fundamentals.",
    tags: ["React"],
    image: todo,
    github: "https://github.com/harish-pasupuleti/Todo",
    category: "web",
  },
  {
  name: "DataChat Agent – CSV Conversational Analysis",
  description:
    "A powerful Python-based data analysis agent that enables users to chat with their CSV files. Powered by NVIDIA’s Nemotron LLM, this tool lets users upload CSVs and ask questions in natural language (e.g., 'What’s the average revenue by region?'). It uses Pandas for parsing, NVIDIA API for LLM interaction, and Streamlit for the UI. Ideal for data professionals looking for an AI-driven assistant for quick insights.",
  tags: ["Python", "NVIDIA LLM", "Streamlit", "Pandas", "AI"],
  image: dt, // Replace with your image path
  github: "https://github.com/harish-pasupuleti/Data_Analysis_agent", // Update if different
  category: "others",
}
];


export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
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
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my projects across Web, ML, and other domains.
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
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1">
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
                      className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
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
  );
}
