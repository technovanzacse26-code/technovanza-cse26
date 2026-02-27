import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import { GraduationCap } from "lucide-react";

const HodSection = () => {
  const { hod } = symposiumConfig;

  return (
    <section id="hod" className="py-20 relative">
      <div className="container relative z-10 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-gradient neon-border rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient mb-2">
            {hod.name}
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6">
            {hod.title}
          </p>

          {hod.message && (
            <blockquote className="text-foreground/80 text-sm md:text-base leading-relaxed italic border-l-2 border-primary/40 pl-4 text-left max-w-xl mx-auto">
              "{hod.message}"
            </blockquote>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HodSection;
