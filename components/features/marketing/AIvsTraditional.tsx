import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, FileText, Trophy, X, Check } from 'lucide-react';

const differences = [
  {
    aspect: 'Target',
    icon: Target,
    traditional: 'Google search algorithms',
    aiFirst: 'AI model training data & reasoning patterns',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    aspect: 'Metrics',
    icon: TrendingUp,
    traditional: 'Rankings, backlinks, domain authority',
    aiFirst: 'Entity recognition, citation quality, trust signals',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    aspect: 'Content',
    icon: FileText,
    traditional: 'Keyword-optimized pages',
    aiFirst: 'Structured knowledge, clear expertise signals',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    aspect: 'Success',
    icon: Trophy,
    traditional: 'Top 3 Google ranking',
    aiFirst: 'Brand mentioned in AI responses',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

export function AIvsTraditional() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-muted/30 to-background animate-in fade-in duration-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700 px-4">
          Why AI-SEO is Different
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 px-4">
          Traditional SEO tactics don't work when AI models generate answers. 
          You need a fundamentally different approach.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {differences.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <Card 
                key={diff.aspect} 
                className={`relative overflow-hidden border-2 hover:border-primary/30 bg-gradient-to-br ${diff.color}`}
              >
                {/* Icon badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="p-2 sm:p-3 bg-background/80 backdrop-blur-sm rounded-lg sm:rounded-xl border shadow-lg">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 flex-wrap">
                    {diff.aspect}
                    <Badge variant="secondary" className="text-xs">Comparison</Badge>
                  </h3>
                  
                  {/* Traditional approach */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-background/60 backdrop-blur-sm border border-muted">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <div className="p-1 sm:p-1.5 bg-red-500/10 rounded-full mt-0.5 flex-shrink-0">
                        <X className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">Traditional SEO</p>
                        <p className="text-xs sm:text-sm leading-relaxed break-words">{diff.traditional}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI-First approach */}
                  <div className="p-3 sm:p-4 rounded-lg bg-primary/5 backdrop-blur-sm border-2 border-primary/20">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="p-1 sm:p-1.5 bg-primary/20 rounded-full mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs sm:text-sm text-primary mb-1">AI-First Approach</p>
                        <p className="text-xs sm:text-sm leading-relaxed font-medium break-words">{diff.aiFirst}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA highlight */}
        <div className="text-center px-4">
          <Card className="inline-block p-4 sm:p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/30 hover:border-primary/50 transition-colors max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2">The Bottom Line</p>
            <p className="text-base sm:text-lg md:text-xl font-medium">
              Kasparro analyzes what AI models actually see, understand, and trust about your brand
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
