import { Music, Heart, Globe, Headphones } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => (
  <div className="container mx-auto px-4 py-12 pb-28 max-w-3xl">
    <div className="text-center mb-12 animate-fade-in-up">
      <img src={logo} alt="Peace World" className="h-24 w-24 mx-auto rounded-full mb-6" />
      <h1 className="text-4xl font-display font-bold mb-4">
        About <span className="text-gradient">Peace World</span>
      </h1>
      <p className="text-lg text-muted-foreground">
        A serene music sanctuary where melodies from around the world come together to bring peace to your soul.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 mb-12">
      {[
        { icon: Music, title: "Curated Music", desc: "Hand-picked songs across genres — melody, love, devotional, pop, classical, and more." },
        { icon: Globe, title: "Multilingual", desc: "Songs in English, Hindi, Telugu, Tamil, Korean, Japanese, and growing." },
        { icon: Heart, title: "Mood-Based", desc: "Find the perfect song for every feeling — happy, sad, romantic, or peaceful." },
        { icon: Headphones, title: "Beautiful Player", desc: "A clean, distraction-free listening experience designed for music lovers." },
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="glass-card p-6 hover-lift">
          <Icon className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>

    <div className="glass-card p-8 text-center">
      <h2 className="text-2xl font-display font-bold mb-3">Our Mission</h2>
      <p className="text-muted-foreground leading-relaxed">
        Peace World was born from a simple idea: music transcends borders and languages. 
        We believe everyone deserves a peaceful corner of the internet where they can discover 
        beautiful melodies from cultures around the world. Whether you seek solace in a devotional 
        hymn, joy in a K-pop beat, or romance in a Bollywood ballad — Peace World is your home.
      </p>
    </div>
  </div>
);

export default About;
