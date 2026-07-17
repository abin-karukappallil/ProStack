"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Database,
  Lock,
  Zap,
  ArrowRight,
  Computer,
  Layers,
  Shield,
  Server,
} from "lucide-react";

const techStack = [
  {
    icon: Zap,
    title: "tRPC",
    description: "End-to-end typesafe APIs without code generation",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    icon: Shield,
    title: "Better Auth",
    description: "Modern authentication with email/password, OAuth & more",
    color: "from-emerald-500/10 to-green-500/10",
    borderColor: "group-hover:border-emerald-500/30",
  },
  {
    icon: Database,
    title: "Drizzle ORM",
    description: "TypeScript ORM that's lightweight, performant & typesafe",
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "group-hover:border-amber-500/30",
  },
  {
    icon: Server,
    title: "Supabase",
    description: "Open source Firebase alternative with PostgreSQL",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "group-hover:border-purple-500/30",
  },
];

const features = [
  {
    icon: Layers,
    title: "Shadcn UI Components",
    description: "Beautiful, accessible components built with Radix UI and Tailwind CSS",
  },
  {
    icon: Lock,
    title: "Protected Routes",
    description: "Built-in authentication guards with public and protected procedures",
  },
  {
    icon: Zap,
    title: "Type Safety",
    description: "Full end-to-end type safety from database to frontend with zero codegen",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ProStack</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Computer className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-muted/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Production-ready ProStack starter
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-slide-up">
            Ship faster with{" "}
            <span className="gradient-text">the modern stack</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            A production-ready Next.js ProStack starter with tRPC, Better Auth, Drizzle ORM,
            and Supabase. Everything you need to build full-stack apps.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 animate-slide-up delay-300">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <Link href="/register">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-12 px-8 text-base">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Computer className="w-4 h-4 mr-2" />
                View Source
              </a>
            </Button>
          </div>

          {/* Terminal preview */}
          <div className="mt-16 animate-slide-up delay-400">
            <div className="max-w-xl mx-auto rounded-xl border border-border/60 bg-card overflow-hidden shadow-2xl shadow-black/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
              </div>
              <div className="p-5 font-mono text-sm text-left space-y-2">
                <p>
                  <span className="text-emerald-500">$</span>{" "}
                  <span className="text-foreground">npx create-next-app@latest --example</span>
                </p>
                <p>
                  <span className="text-emerald-500">$</span>{" "}
                  <span className="text-foreground">npm install</span>
                </p>
                <p>
                  <span className="text-emerald-500">$</span>{" "}
                  <span className="text-foreground">npm run db:push</span>
                </p>
                <p>
                  <span className="text-emerald-500">$</span>{" "}
                  <span className="text-foreground">npm run dev</span>
                </p>
                <p className="text-muted-foreground mt-2">
                  ▲ Ready on <span className="text-foreground">http://localhost:3000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Built with the best
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Modern tools working together seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <Card
                key={tech.title}
                className={`group relative p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-default ${tech.borderColor}`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-muted/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-5 h-5 text-foreground/80" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything included
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              So you can focus on building your product
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-muted/80 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to ship?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Clone, configure, deploy. It&apos;s that simple.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg" asChild className="h-12 px-8">
              <Link href="/register">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary-foreground" />
            </div>
            <span>ProStack</span>
          </div>
          <p>Open source · MIT License</p>
        </div>
      </footer>
    </div>
  );
}