import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import FeatureGrid from "./landing/FeatureGrid";
import PricingSection from "./landing/PricingSection";

interface HomeProps {
  onSignUp?: () => void;
}

const Home = ({
  onSignUp = () => console.log("Sign up clicked"),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onSignUpClick={onSignUp} />

      {/* Add padding top to account for fixed navbar */}
      <main className="pt-20">
        <HeroSection onCtaClick={onSignUp} />

        <div id="features">
          <FeatureGrid />
        </div>

        <div id="pricing">
          <PricingSection />
        </div>
      </main>

      <footer className="bg-background border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} LinkHiveAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
