import { motion } from "framer-motion";
import { UserPlus, ArrowLeftRight, Send, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Account", desc: "Sign up with your ID from any of the 3 countries" },
  { icon: ArrowLeftRight, title: "Choose Corridor", desc: "Pick source & destination countries and currencies" },
  { icon: Send, title: "Send Funds", desc: "Pay via Interac, Cash App, Zelle, SPEI or card" },
  { icon: CheckCircle2, title: "Delivered", desc: "Recipient gets funds in minutes, not days" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How it <span className="text-gradient-accent">Works</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Step {i + 1}
              </div>
              <h3 className="font-display font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
