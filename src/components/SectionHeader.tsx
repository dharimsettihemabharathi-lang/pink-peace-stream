import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SectionHeader = ({ title, linkTo, linkText = "View All" }: {
  title: string;
  linkTo?: string;
  linkText?: string;
}) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-display font-bold">{title}</h2>
    {linkTo && (
      <Link to={linkTo} className="text-sm text-primary hover:text-pink-deep transition-colors flex items-center gap-1">
        {linkText} <ChevronRight className="h-4 w-4" />
      </Link>
    )}
  </div>
);

export default SectionHeader;
