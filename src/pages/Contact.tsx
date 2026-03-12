import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon. 💌");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 pb-28 max-w-4xl">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-display font-bold mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-muted-foreground">We'd love to hear from you. Drop us a message!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "hello@peaceworld.music" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-PEACE" },
            { icon: MapPin, label: "Location", value: "Everywhere music plays 🌍" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card p-4 flex items-center gap-4 hover-lift">
              <div className="p-3 rounded-xl pink-gradient">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Name</label>
            <Input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" required className="bg-muted/30" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <Input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" required className="bg-muted/30" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Message</label>
            <Textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us what's on your mind..." rows={4} required className="bg-muted/30" />
          </div>
          <Button type="submit" className="w-full pink-gradient text-primary-foreground hover:opacity-90">
            <Send className="h-4 w-4 mr-2" /> Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
