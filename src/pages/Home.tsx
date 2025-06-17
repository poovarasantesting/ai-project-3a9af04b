import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              Web Developer & Designer crafting beautiful digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Some of my recent work that showcases my skills and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-165872257898${item}-b4d64c98952b?q=80&w=600&auto=format&fit=crop`} 
                    alt={`Project ${item}`}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-lg mb-2">Project Title {item}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A brief description of this project and the technologies used.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/projects#project-${item}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Technologies and tools I specialize in
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "MongoDB", "GraphQL", "Figma", "Git", "AWS", "Docker", "UI/UX"].map((skill) => (
              <div key={skill} className="flex items-center justify-center p-4 bg-background rounded-lg border hover:border-primary transition-colors">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}