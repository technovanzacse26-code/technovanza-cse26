import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import EventCard from "./EventCard";
import { Code, PartyPopper } from "lucide-react";

const EventsSection = () => {
  const { technicalEvents, nonTechnicalEvents } = symposiumConfig;

  return (
    <section id="events" className="py-20 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-4">
            Events
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Compete, create, and conquer across technical and non-technical challenges.
          </p>
        </motion.div>

        {/* Technical Events */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Code className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Technical Events
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <PartyPopper className="w-6 h-6 text-secondary" />
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Non-Technical Events
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
