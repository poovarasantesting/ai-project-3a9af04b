import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product catalog, shopping cart, and checkout functionality.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      tags: ["React", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features.",
      tags: ["React", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=500&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A weather forecasting application using public APIs to display current and future weather conditions.",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=500&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    }
  ];
  
  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;
  
  return (
    <div className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
        </p>
        
        {/* Filter Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border rounded-lg overflow-hidden flex flex-col h-full bg-card hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}