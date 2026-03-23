import { symposiumConfig } from "@/config/symposium";
import { Phone, Mail } from "lucide-react";

const FooterSection = () => {
  const { mainOrganizer, collegeName, departmentName } = symposiumConfig;

  return (
    <footer id="contact" className="py-12 border-t border-border/50 relative">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
         {/* College Info */}
<div>
  <h4 className="font-display text-sm font-bold text-foreground mb-2">
    {collegeName}
  </h4>
  <p className="text-xs text-muted-foreground">{departmentName}</p>
</div>
          {/* Main Organizer */}
          <div className="text-center">
            <h4 className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
             If you facing any problem on registration contact us
            </h4>
            <p className="text-sm font-semibold text-foreground">
              {mainOrganizer.name}
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-xs text-muted-foreground">
              <Phone className="w-3 h-3" />
              {mainOrganizer.phone}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Contact
            </h4>
            <a
              href={`mailto:${mainOrganizer.email}`}
              className="flex items-center justify-center md:justify-end gap-1 text-sm text-primary hover:underline"
            >
              <Mail className="w-3 h-3" />
              {mainOrganizer.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 {symposiumConfig.name} • {departmentName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
