import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const { name, tagline, date, venue, googleFormLink, collegeName, departmentName } = symposiumConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-bg overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 text-center px-4 py-20">
        {/* College Name */}

        {/* College Name */}
<motion.p
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-muted-foreground text-sm md:text-base tracking-wide mb-2"
>
  {collegeName}
</motion.p>
       

        {/* Department Name */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-sm md:text-lg font-bold text-primary tracking-[0.2em] uppercase mb-4"
        >
          {departmentName}
        </motion.h2>

        {/* Presents */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
           Student Organisers: B.Aadhithiyan -8667018155 || S.Vijay Narayan-8668052217
                               
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
         className="font-display text-3xl md:text-7xl lg:text-8xl font-black tracking-wider text-gradient mb-4"
        >
          {name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          {tagline}
        </motion.p>

        {/* Date & Venue pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-muted/30">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-foreground/80">{date}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-muted/30">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-foreground/80">{venue}</span>
          </div>
        </motion.div>

        {/* Register Button - large cyan pill like reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-bold text-lg px-12 py-4 rounded-full bg-primary text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform duration-300 active:scale-95"
          >
            Register Now
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
