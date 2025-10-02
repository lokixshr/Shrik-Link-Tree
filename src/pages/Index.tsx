import { Github, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/shrik-logo.png";
import AnimatedBackground from "@/components/AnimatedBackground";
import RippleEffect from "@/components/RippleEffect";
import SocialLink from "@/components/SocialLink";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shrik.devs@gmail.com");
      toast({ title: "Email copied", description: "shrik.devs@gmail.com" });
    } catch (_) {
      toast({ title: "Couldn't copy email", description: "Select and copy manually." });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <RippleEffect />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo Section */}
        <div className="fade-in mb-16">
          <img 
            src={logo} 
            alt="Shrik Logo" 
            className="w-96 h-auto md:w-[500px] md:h-auto object-contain"
          />
        </div>

        {/* Connect Section */}
        <div className="fade-in-delay-2 w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-brand text-center mb-12 text-foreground/80">
            Contact Us
          </h2>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <SocialLink
              href="https://github.com/lokixshr"
              icon={<Github size={40} strokeWidth={1.5} />}
              label="GitHub"
            />
            
            <SocialLink
              href="https://discord.gg/A2DhwqSh"
              icon={<MessageCircle size={40} strokeWidth={1.5} />}
              label="Discord"
            />
            
            <SocialLink
              href="https://www.linkedin.com/in/laukik-rajput-95bb48300/"
              icon={<Linkedin size={40} strokeWidth={1.5} />}
              label="LinkedIn"
            />
            
            <SocialLink
              href="https://www.reddit.com/user/ShrishLoki/"
              icon={
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 10c0 0.828 0.672 1.5 1.5 1.5S11 10.828 11 10" />
                  <path d="M13 10c0 0.828 0.672 1.5 1.5 1.5S16 10.828 16 10" />
                  <path d="M12 14c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2z" />
                </svg>
              }
              label="Reddit"
            />
            
            
            
            <SocialLink
              href="https://www.instagram.com/shrik.devs/"
              icon={
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              }
              label="Instagram"
            />
            
            <SocialLink
              href="https://x.com/shrxloki"
              icon={
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              }
              label="X"
            />
            
          </div>

          {/* Email Fallback */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-foreground/70">
            <span>Email us:</span>
            <a
              href="mailto:shrik.devs@gmail.com?subject=Connecting%20with%20Shrik&body=Hello%20Shrik%20Team,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards,"
              className="underline hover:text-foreground"
            >
              shrik.devs@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="px-2 py-1 rounded border border-foreground/20 hover:border-foreground/40 transition-colors"
            >
              Copy email
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-sm text-foreground/40 fade-in-delay-2 text-center">
          Click anywhere to see the ripple effect
        </p>
      </div>
    </main>
  );
};

export default Index;
