import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  const isEmail = href.startsWith("mailto:");

  // Use native anchor behavior for maximum compatibility.
  
  return (
    <a
      href={href}
      target={isEmail ? "_top" : "_blank"}
      rel={isEmail ? "noopener" : "noopener noreferrer"}
      className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      <div className="relative">
        <div className="text-foreground transition-all duration-300 group-hover:glow-strong">
          {icon}
        </div>
        <div className="absolute inset-0 bg-foreground/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
        {label}
      </span>
    </a>
  );
};

export default SocialLink;
