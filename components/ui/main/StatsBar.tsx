import CounterAnimation from "@/components/ui/CounterAnimation";
import { TrendingUp, MapPin, Shield } from "lucide-react";

const StatsBar = () => {
  return (
    <section className="w-full bg-muted py-12 md:py-16 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">

          <div
            className="flex flex-col items-center text-center"
            data-animate="fade-up"
            data-animate-delay="0"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
              $500K+
            </div>
            <div className="text-sm font-semibold text-foreground mt-1">Recovered This Year</div>
            <div className="text-xs text-muted-foreground mt-0.5">for our clients</div>
          </div>

          <div
            className="flex flex-col items-center text-center"
            data-animate="fade-up"
            data-animate-delay="100"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
              <CounterAnimation end={67} suffix="" />
            </div>
            <div className="text-sm font-semibold text-foreground mt-1">Florida Counties</div>
            <div className="text-xs text-muted-foreground mt-0.5">statewide coverage</div>
          </div>

          <div
            className="flex flex-col items-center text-center"
            data-animate="fade-up"
            data-animate-delay="200"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
              <Shield className="h-6 w-6" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              $0
            </div>
            <div className="text-sm font-semibold text-foreground mt-1">Upfront Cost</div>
            <div className="text-xs text-muted-foreground mt-0.5">contingency-based</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBar;
