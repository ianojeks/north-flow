import { useState } from "react";
import { motion } from "framer-motion";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { ArrowDownUp, RefreshCw } from "lucide-react";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽" },
];

export default function CurrencyConverter() {
  const { rates, lastUpdated, loading } = useExchangeRates();
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CAD");

  const getRate = (from: string, to: string): number => {
    const key = `${from}${to}` as keyof typeof rates;
    return rates[key] || 1;
  };

  const convertedAmount = parseFloat(amount || "0") * getRate(fromCurrency, toCurrency);
  const rate = getRate(fromCurrency, toCurrency);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <section className="py-20 px-6 scroll-mt-20" id="converter">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Live Currency <span className="text-gradient-primary">Converter</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get real-time exchange rates updated every hour. No markup, no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl border border-border p-8 shadow-card max-w-2xl mx-auto"
        >
          {/* From */}
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-2 block">You send</label>
            <div className="flex gap-3">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-muted rounded-xl px-5 py-4 text-2xl font-display font-semibold text-foreground border border-border focus:border-primary focus:outline-none transition-colors tabular-nums"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="bg-muted rounded-xl px-4 py-4 text-foreground border border-border font-display font-medium focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap button */}
          <div className="flex items-center justify-center my-4">
            <button
              onClick={swap}
              className="p-3 rounded-full bg-secondary border border-border hover:bg-muted transition-colors"
            >
              <ArrowDownUp className="w-5 h-5 text-primary" />
            </button>
            <div className="ml-4 text-sm text-muted-foreground">
              1 {fromCurrency} = <span className="text-foreground font-semibold tabular-nums">{rate.toFixed(4)}</span> {toCurrency}
            </div>
          </div>

          {/* To */}
          <div className="mb-6">
            <label className="text-sm text-muted-foreground mb-2 block">They receive</label>
            <div className="flex gap-3">
              <div className="flex-1 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 text-2xl font-display font-semibold text-primary tabular-nums">
                {convertedAmount.toFixed(2)}
              </div>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="bg-muted rounded-xl px-4 py-4 text-foreground border border-border font-display font-medium focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
              Updated {lastUpdated.toLocaleTimeString()}
            </div>
            <span>Rates refresh hourly</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
