import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  const isEmail = href.startsWith("mailto:");

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Some in-app browsers / IDE previews block default mailto navigation.
    // Explicitly trigger navigation as a fallback.
    if (isEmail) {
      // Do not preventDefault so browsers that handle mailto normally still work.
      // But also assign to location to help strict environments.
      try {
        window.location.href = href;
      } catch (_) {
        // no-op
      }
    }
  };
  
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      onClick={isEmail ? handleEmailClick : undefined}
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
