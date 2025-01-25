import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

interface PricingSectionProps {
  tiers?: PricingTier[];
}

const defaultTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "100 links per month",
      "Basic search",
      "Simple organization",
      "Standard support",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$9",
    description: "Best for power users",
    features: [
      "Unlimited links",
      "Advanced AI retrieval",
      "Smart organization",
      "Priority support",
      "Custom tags",
    ],
    buttonText: "Start Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "$19",
    description: "Perfect for collaboration",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared workspaces",
      "Admin controls",
      "API access",
      "24/7 support",
    ],
    buttonText: "Start Team",
  },
];

const PricingSection = ({ tiers = defaultTiers }: PricingSectionProps) => {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col backdrop-blur-sm bg-card/50 ${tier.popular ? "border-primary shadow-lg scale-105" : "border-border/50"} hover:border-primary/50 transition-all duration-300 hover:shadow-lg`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
