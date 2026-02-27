import { motion } from "framer-motion";
import { Smartphone, CreditCard, Building2, ArrowRight } from "lucide-react";

const systems = [
  {
    country: "🇨🇦 Canada",
    methods: [
      { name: "Interac e-Transfer", desc: "Instant bank-to-bank transfers across all major Canadian banks", icon: Building2, primary: true },
      { name: "Apple Pay", desc: "Tap-to-send from any Apple device linked to your Canadian bank", icon: Smartphone, primary: false },
      { name: "Interac Debit", desc: "Direct debit from Canadian chequing accounts", icon: CreditCard, primary: false },
    ],
  },
  {
    country: "🇺🇸 United States",
    methods: [
      { name: "Cash App", desc: "Peer-to-peer instant payments with $cashtag support", icon: Smartphone, primary: true },
      { name: "Apple Pay / Google Pay", desc: "Contactless wallet payments via linked US bank accounts", icon: Smartphone, primary: false },
      { name: "Zelle", desc: "Bank-network instant transfers between US bank accounts", icon: Building2, primary: false },
      { name: "ACH Transfer", desc: "Standard US bank transfer rail for larger amounts", icon: CreditCard, primary: false },
    ],
  },
  {
    country: "🇲🇽 Mexico",
    methods: [
      { name: "SPEI", desc: "Mexico's real-time interbank payment system by Banxico", icon: Building2, primary: true },
      { name: "CoDi", desc: "QR-based instant payment platform built on SPEI", icon: Smartphone, primary: false },
      { name: "CLABE Transfer", desc: "Direct deposits to Mexican bank accounts via CLABE number", icon: CreditCard, primary: false },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PaymentSystems() {
  return (
    <section id="payments" className="py-20 px-6 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Payment Rails & <span className="text-gradient-accent">Integrations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We connect to the native payment infrastructure in each country — so your money moves through the fastest, most trusted systems available.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {systems.map((sys) => (
            <motion.div
              key={sys.country}
              variants={item}
              className="bg-gradient-card rounded-2xl border border-border p-6 shadow-card"
            >
              <h3 className="text-xl font-display font-bold mb-6">{sys.country}</h3>
              <div className="space-y-4">
                {sys.methods.map((method) => (
                  <div
                    key={method.name}
                    className={`p-4 rounded-xl border transition-colors ${
                      method.primary
                        ? "border-primary/30 bg-primary/5"
                        : "border-border bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <method.icon className={`w-4 h-4 ${method.primary ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-display font-semibold text-sm">{method.name}</span>
                      {method.primary && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground pl-7">{method.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
