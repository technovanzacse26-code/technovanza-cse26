import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";

const AboutSection = () => {
  const { principal, hod, collegeName, departmentName } = symposiumConfig;

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
          {/* Principal */}
          <div className="mb-8 pb-6 border-b border-border/30">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
              {principal.name}
            </h3>
            <p className="font-mono text-sm text-primary">
              {principal.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{collegeName}</p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
