import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AgentCards } from "@/components/landing/AgentCards";
import { TechnicalFeatures } from "@/components/landing/TechnicalFeatures";
import { PricingTable } from "@/components/landing/PricingTable";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-anthracite">
      <Navbar />
      <main>
        <Hero />
        <AgentCards />
        <TechnicalFeatures />
        <PricingTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
