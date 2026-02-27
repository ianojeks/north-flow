import Navbar from "@/components/Navbar";
import RateTicker from "@/components/RateTicker";
import HeroSection from "@/components/HeroSection";
import CurrencyConverter from "@/components/CurrencyConverter";
import PaymentSystems from "@/components/PaymentSystems";
import HowItWorks from "@/components/HowItWorks";
import Corridors from "@/components/Corridors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <RateTicker />
        <HeroSection />
        <CurrencyConverter />
        <Corridors />
        <PaymentSystems />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
