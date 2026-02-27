import { motion } from "framer-motion";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { ArrowUpDown, TrendingUp, Clock } from "lucide-react";

const pairs = [
  { from: "USD", to: "CAD", key: "USDCAD" as const, flag: "🇺🇸→🇨🇦" },
  { from: "USD", to: "MXN", key: "USDMXN" as const, flag: "🇺🇸→🇲🇽" },
  { from: "CAD", to: "MXN", key: "CADMXN" as const, flag: "🇨🇦→🇲🇽" },
  { from: "CAD", to: "USD", key: "CADUSD" as const, flag: "🇨🇦→🇺🇸" },
  { from: "MXN", to: "USD", key: "MXNUSD" as const, flag: "🇲🇽→🇺🇸" },
  { from: "MXN", to: "CAD", key: "MXNCAD" as const, flag: "🇲🇽→🇨🇦" },
];

export default function RateTicker() {
  const { rates, lastUpdated, loading } = useExchangeRates();

  const items = pairs.map((p) => (
    <div key={p.key} className="flex items-center gap-3 px-6 py-2 whitespace-nowrap">
      <span className="text-lg">{p.flag}</span>
      <span className="text-muted-foreground text-sm font-medium">
        {p.from}/{p.to}
      </span>
      <span className="text-foreground font-display font-semibold tabular-nums">
        {rates[p.key].toFixed(4)}
      </span>
      <TrendingUp className="w-3 h-3 text-primary" />
    </div>
  ));

  return (
    <div className="w-full border-b border-border bg-secondary/50 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-2 px-4 py-2 border-r border-border bg-muted shrink-0">
          <div className={`w-2 h-2 rounded-full bg-primary ${loading ? "pulse-glow" : ""}`} />
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex">
            {items}
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}
