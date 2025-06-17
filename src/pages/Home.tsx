import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <section className="py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate web developer creating beautiful, functional, and user-friendly websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Building responsive and modern websites using the latest technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Creating intuitive and engaging user experiences with thoughtful design.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-muted-foreground">
              Developing cross-platform mobile applications that deliver seamless experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}