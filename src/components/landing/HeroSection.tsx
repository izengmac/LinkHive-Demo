import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Search, Bookmark, Plus } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Never Lose Another Important Link Again",
  subtitle = "The AI-powered bookmark assistant for busy creators, researchers, and professionals. Save links with a quick note, find them instantly using natural language.",
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
                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 mb-2">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-primary" />
                        <input
                          type="text"
                          placeholder="Search naturally: 'that video about Instagram growth strategies'"
                          className="w-full bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground"
                          defaultValue="content creation tips for Instagram"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground ml-4">
                      Try: "viral TikTok ideas" or "research papers on AI
                      marketing"
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-primary" />
                        <span className="font-medium">AI-Powered Results</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Found 3 relevant links
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium mb-1">
                              Instagram Growth Strategies for 2024
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Latest tactics for organic reach and engagement
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Instagram
                              </span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Growth
                              </span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Strategy
                              </span>
                            </div>
                          </div>
                          <Bookmark className="w-4 h-4 text-primary" />
                        </div>
                      </div>

                      <div className="bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium mb-1">
                              Content Calendar Template 2024
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Efficient planning for multi-platform content
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Planning
                              </span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Template
                              </span>
                            </div>
                          </div>
                          <Bookmark className="w-4 h-4 text-primary" />
                        </div>
                      </div>

                      <div className="bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium mb-1">
                              AI Tools for Content Creation
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Top AI tools to streamline your workflow
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                AI Tools
                              </span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Productivity
                              </span>
                            </div>
                          </div>
                          <Bookmark className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Add */}
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="font-medium">Quick Add Link</span>
                      </div>
                      <Button size="sm" variant="ghost" className="text-xs">
                        <Plus className="w-4 h-4 mr-1" /> Add Link
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Save links with a quick note like "great Instagram reels
                      ideas" or "research for next video". AI handles the rest!
                    </p>
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
