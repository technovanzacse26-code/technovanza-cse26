import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import collegeLogo from "@/assets/college-logo.png";
import deptLogo from "@/assets/dept-logo.png";
import { CalendarDays, MapPin } from "lucide-react";

const HeroSection = () => {
  const { name, tagline, date, venue, googleFormLink } = symposiumConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-bg overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 text-center px-4 py-20">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-8"
        >
          <img
            src={collegeLogo}
            alt="College Logo"
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-lg"
          />
          <img
            src={deptLogo}
            alt="Department Logo"
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-wider text-gradient mb-4"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10"
        >
          <div className="flex items-center gap-2 text-foreground/80">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm md:text-base">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm md:text-base">{venue}</span>
          </div>
        </motion.div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-bold text-lg px-10 py-4 rounded-lg bg-primary text-primary-foreground neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Register Now
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-xs text-muted-foreground"
        >
          {symposiumConfig.collegeName}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
