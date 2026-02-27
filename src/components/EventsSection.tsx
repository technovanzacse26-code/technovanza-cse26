import { useState } from "react";
import { motion } from "framer-motion";
import { symposiumConfig } from "@/config/symposium";
import EventCard from "./EventCard";
import { Zap, Gamepad2 } from "lucide-react";

const EventsSection = () => {
  const { technicalEvents, nonTechnicalEvents } = symposiumConfig;
  const [activeTab, setActiveTab] = useState<"technical" | "non-technical">("technical");

  const events = activeTab === "technical" ? technicalEvents : nonTechnicalEvents;

  return (
    <section id="events" className="py-20 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-4">
            Events
          </h2>
        </motion.div>

        {/* Tabs like reference */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-border/60 bg-muted/20 p-1">
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="w-4 h-4" />
              Technical
            </button>
            <button
              onClick={() => setActiveTab("non-technical")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                activeTab === "non-technical"
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              Non-Technical
            </button>
          </div>
        </div>

        {/* Event Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
