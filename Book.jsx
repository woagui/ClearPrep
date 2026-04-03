import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, Clock, User, Mail, Phone, MessageSquare, AlertCircle } from "lucide-react";

// ─────────────────────────────────────────────
// 1. Sign up at https://formspree.io (free)
// 2. Create a new form → set email to suhasmulagala@gmail.com
// 3. Replace YOUR_FORM_ID below with your form's ID
// ─────────────────────────────────────────────
const FORMSPREE_ID = "YOUR_FORM_ID";

const SUBJECTS = [
  "SAT Math only",
  "SAT Reading & Writing only",
  "Full SAT (Math + R&W)",
  "Score review / strategy session",
  "Not sure yet",
];

const TIMEFRAMES = [
  "Less than 1 month",
  "1–2 months",
  "2–4 months",
  "4+ months",
];

const INPUT_CLASS =
  "w-full rounded-xl bg-muted/40 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all";

const Label = ({ children }) => (
  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
    {children}
  </label>
);

export default function Book() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            Free Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-foreground">
            Book Your{" "}
            <span className="gradient-text">Free Session</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            No commitment. We'll map out your current level, target score, and a personalized plan — completely free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {[
            { icon: Calendar, label: "30-min call" },
            { icon: Clock, label: "Flexible timing" },
            { icon: CheckCircle2, label: "100% free" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-card border border-border/50 py-4">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-card border border-border/50 p-8"
        >
          {status === "success" ? (
            <SuccessState />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label><User className="inline h-3 w-3 mr-1" />Student's full name *</Label>
                <input type="text" name="name" required placeholder="Jane Smith" className={INPUT_CLASS} />
              </div>
              <div>
                <Label><Mail className="inline h-3 w-3 mr-1" />Email address *</Label>
                <input type="email" name="email" required placeholder="jane@example.com" className={INPUT_CLASS} />
              </div>
              <div>
                <Label><Phone className="inline h-3 w-3 mr-1" />Phone number (optional)</Label>
                <input type="tel" name="phone" placeholder="(555) 000-0000" className={INPUT_CLASS} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Current SAT score</Label>
                  <input type="number" name="current_score" min={400} max={1600} placeholder="e.g. 1180" className={INPUT_CLASS} />
                </div>
                <div>
                  <Label>Target SAT score *</Label>
                  <input type="number" name="target_score" required min={400} max={1600} placeholder="e.g. 1450" className={INPUT_CLASS} />
                </div>
              </div>
              <div>
                <Label>Area of focus *</Label>
                <select name="focus_area" required className={INPUT_CLASS}>
                  <option value="">Select an area…</option>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <Label>Test timeframe *</Label>
                <select name="timeframe" required className={INPUT_CLASS}>
                  <option value="">When is the test?</option>
                  {TIMEFRAMES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <Label><MessageSquare className="inline h-3 w-3 mr-1" />Anything else we should know?</Label>
                <textarea name="message" rows={3} placeholder="Specific struggles, scheduling preferences, questions…" className={INPUT_CLASS + " resize-none"} />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <Button type="submit" disabled={status === "loading"} size="lg"
                className="w-full gradient-bg text-white font-semibold py-6 text-base hover:opacity-90 transition-opacity glow disabled:opacity-60">
                {status === "loading" ? "Sending…" : <><span>Book Free Consultation</span> <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                You'll receive a confirmation email within 24 hours.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}

function SuccessState() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center py-8 gap-5">
      <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center glow">
        <CheckCircle2 className="h-8 w-8 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">You're booked! 🎉</h2>
        <p className="text-muted-foreground text-sm max-w-xs">
          We've received your request and will reach out within 24 hours to confirm your free consultation time.
        </p>
      </div>
      <div className="text-xs text-muted-foreground border border-border/50 rounded-xl px-4 py-3 bg-muted/30">
        Confirmation sent to your email — check spam if you don't see it.
      </div>
    </motion.div>
  );
}
