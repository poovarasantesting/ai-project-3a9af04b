import { Code, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" 
                  alt="Profile" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3">
                Your Name
              </h1>
              <p className="text-muted-foreground mb-6">
                Full Stack Developer
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  <span>Computer Science, University Name</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">About Me</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Hello! I'm a passionate developer with expertise in building modern web applications. I enjoy creating intuitive user interfaces and robust backend systems.
                </p>
                <p className="mb-4">
                  With over 5 years of experience in the industry, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen. I believe in a balanced approach to life and work, which helps me stay creative and productive.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 pl-4 border-primary">
                  <h3 className="font-semibold text-lg">Senior Developer</h3>
                  <p className="text-primary">Company Name • 2021 - Present</p>
                  <p className="text-muted-foreground mt-2">
                    Led the development of a customer-facing web application, improving user engagement by 40%. Mentored junior developers and introduced best practices.
                  </p>
                </div>
                
                <div className="border-l-2 pl-4 border-muted">
                  <h3 className="font-semibold text-lg">Web Developer</h3>
                  <p className="text-primary">Previous Company • 2018 - 2021</p>
                  <p className="text-muted-foreground mt-2">
                    Developed and maintained multiple client websites. Implemented responsive designs and optimized site performance.
                  </p>
                </div>
                
                <div className="border-l-2 pl-4 border-muted">
                  <h3 className="font-semibold text-lg">Junior Developer</h3>
                  <p className="text-primary">First Company • 2016 - 2018</p>
                  <p className="text-muted-foreground mt-2">
                    Assisted in frontend development tasks. Collaborated with designers to implement UI components and features.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 pl-4 border-primary">
                  <h3 className="font-semibold text-lg">Master's in Computer Science</h3>
                  <p className="text-primary">University Name • 2014 - 2016</p>
                  <p className="text-muted-foreground mt-2">
                    Specialized in web technologies and application development.
                  </p>
                </div>
                
                <div className="border-l-2 pl-4 border-muted">
                  <h3 className="font-semibold text-lg">Bachelor's in Computer Science</h3>
                  <p className="text-primary">University Name • 2010 - 2014</p>
                  <p className="text-muted-foreground mt-2">
                    Graduated with honors. Completed several projects in web and mobile development.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}