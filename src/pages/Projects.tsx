import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shop with cart functionality, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern UI design.",
      image: "https://images.unsplash.com/photo-1658812291674-f6c7dea2fcbc?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application with task organization, reminders, and progress tracking.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application showing forecasts and current conditions using external API data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop",
      tags: ["JavaScript", "API Integration", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for creating and publishing blog articles with user comments.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for tracking social media performance across multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "D3.js", "REST APIs"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            A collection of my work, side projects, and open-source contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              id={`project-${project.id}`}
              className="group flex flex-col overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}