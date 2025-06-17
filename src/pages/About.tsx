import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full object-cover aspect-square"
                />
              </div>
              
              <h2 className="text-2xl font-semibold mb-2">Your Name</h2>
              <p className="text-muted-foreground mb-4">Web Developer & Designer</p>
              
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium mb-2">Contact Information</h3>
                <p className="text-sm mb-1">your.email@example.com</p>
                <p className="text-sm mb-1">Location: City, Country</p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <p className="text-muted-foreground mb-4">
                I'm a passionate web developer with a strong background in creating modern and user-friendly web applications. 
                With over X years of experience in the field, I've developed a deep understanding of both front-end and back-end technologies.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in web development began when I discovered my passion for building things that live on the internet. 
                Since then, I've been continuously learning and improving my skills to stay up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="border-l-2 border-muted pl-4 space-y-6">
                <div>
                  <h3 className="font-medium">Bachelor's Degree in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University Name, 20XX - 20XX</p>
                </div>
                <div>
                  <h3 className="font-medium">Relevant Certifications</h3>
                  <p className="text-sm text-muted-foreground">Certification Name, Issuing Organization, Year</p>
                </div>
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "HTML & CSS", "JavaScript", "TypeScript", 
                  "React", "Node.js", "Next.js", 
                  "UI/UX Design", "Responsive Design", "Git"
                ].map((skill, index) => (
                  <div key={index} className="bg-muted rounded-md p-3 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}