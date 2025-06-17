import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-10">
          We'd love to hear from you. Fill out the form below to get in touch.
        </p>
        
        <ContactForm />
      </div>
      <Toaster />
    </div>
  );
}