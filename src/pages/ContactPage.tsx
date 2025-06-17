import { useState } from "react";
import { nanoid } from "nanoid";
import { ContactForm, type ContactFormData } from "@/components/ContactForm";
import { ContactDataTable } from "@/components/ContactDataTable";
import { Toaster } from "@/components/ui/toaster";

type Submission = ContactFormData & {
  id: string;
  timestamp: Date;
};

export default function ContactPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const handleSubmit = (data: ContactFormData) => {
    const newSubmission: Submission = {
      ...data,
      id: nanoid(),
      timestamp: new Date(),
    };
    
    setSubmissions((prev) => [newSubmission, ...prev]);
  };

  return (
    <div className="container py-10 mx-auto">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-xl shadow-sm">
          <ContactForm onSubmit={handleSubmit} />
        </div>
        
        <div className="pt-6">
          <ContactDataTable submissions={submissions} />
        </div>
      </div>
      <Toaster />
    </div>
  );
}