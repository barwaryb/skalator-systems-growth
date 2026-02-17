import { Link } from "react-router-dom";

const moduleSlugMap: Record<string, string> = {
  "Marketing & Leadgenerierung": "marketing-leadgenerierung",
  "Sales & Vertriebsprozesse": "sales-vertriebsprozesse",
  "Operations & Automatisierung": "operations-automatisierung",
  "Recruiting & Teamaufbau": "recruiting-teamaufbau",
};

const ModuleTag = ({ module }: { module: string }) => {
  const slug = moduleSlugMap[module];
  
  return (
    <Link
      to={`/leistungen/${slug}`}
      className="inline-block text-xs font-semibold bg-white/5 border border-white/10 text-white/70 px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-accent transition-all"
    >
      {module}
    </Link>
  );
};

export default ModuleTag;
