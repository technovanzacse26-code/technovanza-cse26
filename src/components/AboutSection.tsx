import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import collegeLogo from "@/assets/college-logo.png";
import deptLogo from "@/assets/dept-logo.png";

const AboutSection = () => {
  const { hod, collegeName, departmentName } = symposiumConfig;

  return (
    <section id="about" className="py-20 relative">
      <div className="container relative z-10 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            About
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-gradient neon-border rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img src={collegeLogo} alt="College Logo" className="w-20 h-20 object-contain" />
            <img src={deptLogo} alt="Department Logo" className="w-20 h-20 object-contain" />
          </div>

          {/* HOD Details */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
            {hod.name}
          </h3>
          <p className="font-mono text-sm text-primary mb-1">
            {hod.title}
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            {departmentName}
          </p>

          {hod.message && (
            <blockquote className="text-foreground/70 text-sm leading-relaxed italic border-l-2 border-primary/40 pl-4 text-left max-w-xl mx-auto">
              "{hod.message}"
            </blockquote>
          )}

          <p className="mt-6 text-xs text-muted-foreground">
            {collegeName}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
