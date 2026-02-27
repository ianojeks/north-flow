import { motion } from "framer-motion";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { ArrowRight } from "lucide-react";

const corridors = [
  { from: "USA", to: "Canada", fromFlag: "🇺🇸", toFlag: "🇨🇦", rateKey: "USDCAD" as const, fromCode: "USD", toCode: "CAD" },
  { from: "USA", to: "Mexico", fromFlag: "🇺🇸", toFlag: "🇲🇽", rateKey: "USDMXN" as const, fromCode: "USD", toCode: "MXN" },
  { from: "Canada", to: "Mexico", fromFlag: "🇨🇦", toFlag: "🇲🇽", rateKey: "CADMXN" as const, fromCode: "CAD", toCode: "MXN" },
  { from: "Canada", to: "USA", fromFlag: "🇨🇦", toFlag: "🇺🇸", rateKey: "CADUSD" as const, fromCode: "CAD", toCode: "USD" },
  { from: "Mexico", to: "USA", fromFlag: "🇲🇽", toFlag: "🇺🇸", rateKey: "MXNUSD" as const, fromCode: "MXN", toCode: "USD" },
  { from: "Mexico", to: "Canada", fromFlag: "🇲🇽", toFlag: "🇨🇦", rateKey: "MXNCAD" as const, fromCode: "MXN", toCode: "CAD" },
];

export default function Corridors() {
  const { rates } = useExchangeRates();

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Supported <span className="text-gradient-primary">Corridors</span>
          </h2>
          <p className="text-muted-foreground">
            Send and receive across all North American corridors with transparent mid-market rates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {corridors.map((c, i) => (
            <motion.div
              key={c.rateKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-gradient-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-glow transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.fromFlag}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-2xl">{c.toFlag}</span>
              </div>
              <div className="font-display font-semibold text-sm mb-1">
                {c.from} → {c.to}
              </div>
              <div className="text-xs text-muted-foreground">
                1 {c.fromCode} ={" "}
                <span className="text-foreground font-semibold tabular-nums">
                  {rates[c.rateKey].toFixed(4)}
                </span>{" "}
                {c.toCode}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
