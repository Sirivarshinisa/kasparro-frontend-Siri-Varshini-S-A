import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden border-b">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/50 text-xs sm:text-sm">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>AI Search Intelligence Platform</span>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl">
                Your brand's visibility in
                <span className="block text-muted-foreground mt-1">AI-generated answers</span>
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Measure and optimize how ChatGPT, Perplexity, and next-gen search engines cite your content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/app/dashboard">
                  Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/platform">Technical Details</Link>
              </Button>
            </div>
          </div>

          {/* Right: Stats/Visual Element */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg border bg-card space-y-2 hover:shadow-lg transition-shadow h-[120px] flex flex-col justify-center">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">Audit modules</div>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-2 hover:shadow-lg transition-shadow h-[120px] flex flex-col justify-center">
              <div className="text-3xl font-bold">3-5m</div>
              <div className="text-sm text-muted-foreground">Average audit time</div>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-2 hover:shadow-lg transition-shadow h-[120px] flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-sm font-semibold">Real-time</div>
              </div>
              <div className="text-xs text-muted-foreground">AI visibility tracking</div>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-2 hover:shadow-lg transition-shadow h-[120px] flex flex-col justify-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">AI systems analyzed</div>
            </div>
            <div className="col-span-2 p-6 rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 space-y-2 hover:shadow-lg transition-shadow h-[100px] flex flex-col justify-center">
              <div className="text-2xl font-bold">🎯 AI-First Optimization</div>
              <div className="text-sm text-muted-foreground">Built specifically for next-gen search engines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
