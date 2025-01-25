import React from "react";
import { Card, CardContent } from "../ui/card";
import { Brain, Search, FolderTree, Zap, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here",
}: FeatureCardProps) => {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
        <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface FeatureGridProps {
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const defaultFeatures = [
  {
    icon: <Brain size={24} />,
    title: "AI-Powered Intelligence",
    description:
      "Our advanced AI understands your links and notes, making them easily searchable and retrievable when you need them",
  },
  {
    icon: <Search size={24} />,
    title: "Natural Language Search",
    description:
      "Simply type what you're looking for in everyday language, and our AI will find the most relevant links and notes",
  },
  {
    icon: <FolderTree size={24} />,
    title: "Smart Collections",
    description:
      "AI automatically organizes your links into meaningful collections, making it easy to find related content",
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Summaries",
    description:
      "Get AI-generated summaries of your saved links, helping you quickly recall why you saved them",
  },
];

const PainPoint = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4 p-6 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-300 border border-border/50">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-destructive/10 text-destructive">
      <X size={24} />
    </div>
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Testimonial = ({
  quote,
  author,
  role,
  avatar,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}) => (
  <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center space-x-4 mb-4">
      <img src={avatar} alt={author} className="h-12 w-12 rounded-full" />
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
    <p className="italic text-muted-foreground">"{quote}"</p>
  </div>
);

const FeatureGrid = ({ features = defaultFeatures }: FeatureGridProps) => {
  return (
    <section className="w-full bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Supercharge Your Bookmarks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of link management with our AI-powered
            features
          </p>
        </div>
        {/* Pain Points Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Common Challenges We Solve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <PainPoint
              title="Overwhelming Bookmark Chaos"
              description="Tired of endless bookmark folders and lost important links? Our AI organizes everything automatically."
            />
            <PainPoint
              title="Time-Consuming Search"
              description="Stop wasting time scrolling through bookmarks. Find exactly what you need with natural language search."
            />
            <PainPoint
              title="Lost Context"
              description="Can't remember why you saved that link? Our AI provides summaries and context for every bookmark."
            />
            <PainPoint
              title="Information Overload"
              description="Struggling to manage your digital knowledge? Let our AI help you organize and retrieve information effortlessly."
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              quote="LinkHiveAI has transformed how I manage my research. Finding relevant articles is now effortless."
              author="Sarah Chen"
              role="PhD Researcher"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
            />
            <Testimonial
              quote="The AI-powered organization has saved me hours of manual bookmark management."
              author="Michael Rodriguez"
              role="Software Engineer"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
            />
            <Testimonial
              quote="Finally, a bookmark manager that understands context! Game-changer for content creators."
              author="Emma Thompson"
              role="Content Strategist"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-4xl font-bold mb-2">500K+</h4>
              <p className="text-muted-foreground">Links Organized</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">50K+</h4>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p className="text-muted-foreground">User Satisfaction</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="group">
            Try LinkHiveAI Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
