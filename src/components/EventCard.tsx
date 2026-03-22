import { motion } from "framer-motion";
import { EventType } from "@/config/symposium";
import { Users, User, Phone } from "lucide-react";

// Emoji icons for events
const eventIcons: Record<string, string> = {
  "Debugging": "🔍🎯",
  "Prompt Engineering": "🤖",
  "Coding Contest": "💡",
  "Ideathon": "🚀",
  "Rapid Rush": "⚡",
  "Photography": "📸",
  "Chess": "♟️",
  "Meme Creation": "😂",
};

interface EventCardProps {
  event: EventType;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const isTeam = event.type === "Team";
  const icon = eventIcons[event.title] || "🔍";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-gradient neon-border rounded-2xl p-6 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 group"
    >
      {/* Icon + Type badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{icon}</span>
        <span
          className={`flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full ${
            isTeam
              ? "bg-secondary/20 text-secondary border border-secondary/30"
              : "bg-primary/20 text-primary border border-primary/30"
          }`}
        >
          {isTeam ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
          {isTeam && event.teamSize ? `Team (${event.teamSize})` : event.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-foreground mb-3">
        {event.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {event.description}
      </p>

      {/* Participant Limit */}
      <div className="mb-4">
        <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          Limited to {event.limit} {isTeam ? "teams" : "participants"}
        </span>
      </div>

      {/* Rules */}
      <div className="mb-4 flex-1">
        <h4 className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2">
          Rules
        </h4>
        <ul className="space-y-1">
          {event.rules.map((rule, i) => (
            <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
              <span className="text-primary mt-0.5">▸</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* Organizers */}
      <div className="border-t border-border/50 pt-4 mt-auto">
        <h4 className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-2">
          Organizers
        </h4>
        <div className="space-y-1.5">
          {event.organizers.map((org, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-foreground/80">{org.name}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Phone className="w-3 h-3" />
                {org.phone}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
