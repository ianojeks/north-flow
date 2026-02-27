import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-glow" />
            <span className="text-sm text-primary font-medium">Live rates updating hourly</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6 tracking-tight">
            Send money across{" "}
            <span className="text-gradient-primary">North America</span>
            {" "}instantly
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Real-time exchange rates. Zero hidden fees. 
            Seamless transfers between Canada, USA, and Mexico using the payment rails you already trust.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg shadow-glow hover:brightness-110 transition-all"
            >
              Start Sending
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary text-foreground font-display font-semibold text-lg hover:bg-muted transition-all"
            >
              View Rates
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Under 60s transfers</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>3 countries, 1 platform</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
