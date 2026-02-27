import { DollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">NorthFlow</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 NorthFlow. Licensed money transmitter. Rates are indicative and update hourly.
          </p>
        </div>
      </div>
    </footer>
  );
}
