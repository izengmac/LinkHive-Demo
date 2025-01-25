import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Organize Your Links with AI-Powered Intelligence",
  subtitle = "Transform your bookmarks into a smart knowledge base. Save, search, and retrieve your links and notes effortlessly with LinkHiveAI.",
  ctaText = "Get Started Free",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-background via-background/95 to-background flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.1),rgba(37,99,235,0))]" />
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDM3LDk5LDIzNSwwLjEpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" onClick={onCtaClick} className="group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative"
          style={{
            perspective: "1000px",
          }}
        >
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Browser-like frame */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-card transform hover:scale-105 transition-transform duration-500 hover:shadow-primary/20">
              {/* Browser toolbar */}
              <div className="bg-muted/80 p-3 border-b border-border/50 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-background/80 rounded-md p-1 px-3 text-sm text-muted-foreground/70 flex items-center justify-between max-w-lg mx-auto">
                    <span>linkhive.ai/dashboard</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v16h16"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Main content area */}
              <div className="relative bg-background p-6">
                <div className="grid grid-cols-3 gap-4">
                  {/* AI-organized bookmarks visualization */}
                  <div className="col-span-2 space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                      <div className="flex items-center space-x-3 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <span className="font-medium">AI-Organized Links</span>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="bg-card/50 p-3 rounded border border-border/50 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-primary/60" />
                              <span className="text-sm">
                                Smart Bookmark {i}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              AI Tagged
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Sidebar with AI features */}
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center space-x-2 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="font-medium">AI Insights</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Smart summaries and context for your bookmarks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
