import { useState, useEffect, useCallback } from "react";

interface ExchangeRates {
  USDCAD: number;
  USDMXN: number;
  CADMXN: number;
  CADUSD: number;
  MXNUSD: number;
  MXNCAD: number;
}

interface RateData {
  rates: ExchangeRates;
  lastUpdated: Date;
  loading: boolean;
  error: string | null;
}

const FALLBACK_RATES: ExchangeRates = {
  USDCAD: 1.3645,
  USDMXN: 17.1523,
  CADMXN: 12.5725,
  CADUSD: 0.7328,
  MXNUSD: 0.0583,
  MXNCAD: 0.0795,
};

export function useExchangeRates(): RateData {
  const [rates, setRates] = useState<ExchangeRates>(FALLBACK_RATES);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      
      const cad = data.rates.CAD;
      const mxn = data.rates.MXN;

      setRates({
        USDCAD: cad,
        USDMXN: mxn,
        CADMXN: mxn / cad,
        CADUSD: 1 / cad,
        MXNUSD: 1 / mxn,
        MXNCAD: cad / mxn,
      });
      setLastUpdated(new Date());
      setError(null);
    } catch {
      setError("Using cached rates");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 3600000); // hourly
    return () => clearInterval(interval);
  }, [fetchRates]);

  return { rates, lastUpdated, loading, error };
}
