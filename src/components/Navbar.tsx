import { DollarSign, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">NorthFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#converter" className="hover:text-foreground transition-colors">Rates</a>
          <a href="#corridors" className="hover:text-foreground transition-colors">Corridors</a>
          <a href="#payments" className="hover:text-foreground transition-colors">Payment Rails</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-secondary text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
