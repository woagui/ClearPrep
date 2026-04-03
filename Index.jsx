import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users, Brain, Target, BarChart3, Zap, Check, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "+200", label: "Avg. Score Increase", icon: TrendingUp },
  { value: "1520", label: "Founder's SAT Score", icon: Target },
  { value: "10x", label: "Cheaper Than Competitors", icon: DollarSign },
  { value: "1500+", label: "All Tutor Scores", icon: Brain },
];

const testimonials = [
  { name: "Aarya K.", from: 1390, to: 1520, quote: "ClearPrep's visual methods made concepts click instantly. I never thought 1520 was possible." },
  { name: "Karthik K.", from: 1290, to: 1490, quote: "The Desmos strategies were never taught to me anywhere else and I have improved tremendously." },
  { name: "Joshna G.", from: 1250, to: 1530, quote: "I went from feeling lost to feeling confident. The custom study plan was exactly what I needed." },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "We assess your current level, identify weak areas, and build your personalized roadmap." },
  { num: "02", title: "Strategic Prep", desc: "Master visual learning, Desmos techniques, and elimination strategies — not rote memorization." },
  { num: "03", title: "Score Higher", desc: "Walk into test day confident. Our students average +200 points in just 2 months." },
];

const comparison = [
  { feature: "Tutors scored 1500+", us: true, them: false },
  { feature: "Visual learning & Desmos mastery", us: true, them: false },
  { feature: "Custom study plans", us: true, them: false },
  { feature: "Affordable pricing", us: true, them: false },
  { feature: "Flexible scheduling", us: true, them: false },
  { feature: "Strategy-first approach", us: true, them: false },
  { feature: "Generic worksheets", us: false, them: true },
  { feature: "Expensive packages", us: false, them: true },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient background instead of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            SAT Prep Reimagined
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-foreground">
            Stop Studying Harder.{" "}
            <span className="gradient-text">Start Scoring Higher.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            1500+ scoring tutors. Average +200 point improvement. Methods traditional tutoring doesn't teach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book">
              <Button size="lg" className="gradient-bg text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 transition-opacity glow w-full sm:w-auto">
                Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-card/60 backdrop-blur border border-border/50 p-5 text-center">
              <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-24 border-t border-border/30">
      <div className="container">
        <SectionHeading badge="The Founder" title="Built by a Student Who " highlight="Cracked the SAT" description="Not a corporation. Not a franchise. A real student who figured out what works." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl bg-card border border-border/50 p-8 space-y-4">
            {[
              { icon: Target, text: "Scored 1520 on the Digital SAT" },
              { icon: TrendingUp, text: "Improved 100+ points in just 3 weeks" },
              { icon: Zap, text: "Developed unique visual & strategic methods" },
              { icon: Users, text: "Taught multiple students with proven results" },
              { icon: Brain, text: "Uses methods not found in traditional tutoring" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg gradient-bg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-card/30 border-t border-border/30">
      <div className="container">
        <SectionHeading badge="Results" title="Real Students, " highlight="Real Results" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.from} → <span className="text-primary font-semibold">{t.to}</span></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                +{t.to - t.from} points
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison */}
    <section className="py-24 border-t border-border/30">
      <div className="container">
        <SectionHeading badge="Why ClearPrep" title="ClearPrep vs. " highlight="Traditional Tutoring" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl bg-card border border-border/50 overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm font-semibold border-b border-border/50">
            <div className="p-4 text-muted-foreground">Feature</div>
            <div className="p-4 text-center gradient-text">ClearPrep</div>
            <div className="p-4 text-center text-muted-foreground">Others</div>
          </div>
          {comparison.map((row) => (
            <div key={row.feature} className="grid grid-cols-3 text-sm border-b border-border/30 last:border-0">
              <div className="p-4 text-foreground">{row.feature}</div>
              <div className="p-4 flex justify-center">
                {row.us ? <Check className="h-5 w-5 text-green-400" /> : <X className="h-5 w-5 text-red-400/50" />}
              </div>
              <div className="p-4 flex justify-center">
                {row.them ? <Check className="h-5 w-5 text-green-400" /> : <X className="h-5 w-5 text-red-400/50" />}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-24 bg-card/30 border-t border-border/30">
      <div className="container">
        <SectionHeading badge="How It Works" title="Three Steps to Your " highlight="Dream Score" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-6 text-center"
            >
              <div className="text-4xl font-extrabold gradient-text mb-3">{s.num}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiators */}
    <section className="py-24 border-t border-border/30">
      <div className="container">
        <SectionHeading badge="The ClearPrep Edge" title="Why Students Choose " highlight="ClearPrep" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "+200 Avg. Improvement", desc: "In just 2 months of focused prep" },
            { icon: DollarSign, title: "Up to 10x Cheaper", desc: "Premium results without the premium price" },
            { icon: Brain, title: "Desmos Mastery", desc: "Techniques most tutors don't even know" },
            { icon: Target, title: "Visual Learning", desc: "See problems, don't just read about them" },
            { icon: Users, title: "1-on-1 & Group", desc: "Flexible formats that fit your schedule" },
            { icon: Zap, title: "Custom Study Plans", desc: "Tailored to your weaknesses and timeline" },
          ].map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-card border border-border/50 p-5"
            >
              <d.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </main>
);

export default Index;
