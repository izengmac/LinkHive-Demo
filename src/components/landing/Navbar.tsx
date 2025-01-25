import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  logo?: string;
  onSignUpClick?: () => void;
}

const Navbar = ({
  logo = "LinkHiveAI",
  onSignUpClick = () => console.log("Sign up clicked"),
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            {logo}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/#features"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            to="/#pricing"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button onClick={onSignUpClick}>Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
