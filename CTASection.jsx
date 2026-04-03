import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center rounded-2xl bg-card border border-border/50 p-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Ready to <span className="gradient-text">Score Higher?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Book your free consultation today. No commitment, no pressure — just a plan to hit your target score.
          </p>
          <Link to="/book">
            <Button size="lg" className="gradient-bg text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 glow">
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
