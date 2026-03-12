import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm pb-24 md:pb-20">
    <div className="container mx-auto px-4 py-8 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> by Peace World
      </p>
      <p className="text-xs text-muted-foreground/60 mt-1">© 2026 Peace World. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
