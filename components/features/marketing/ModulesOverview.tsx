import { Card } from '@/components/ui/card';
import { 
  FileText, 
  Network, 
  Award, 
  Search, 
  Link, 
  TrendingUp, 
  Target 
} from 'lucide-react';

const modules = [
  {
    name: 'Content Quality & Relevance',
    icon: FileText,
    description: 'Analyze content alignment with AI search patterns and user intent signals',
  },
  {
    name: 'Entity & Knowledge Graph',
    icon: Network,
    description: 'Evaluate brand entity recognition across AI model knowledge bases',
  },
  {
    name: 'E-E-A-T Signals',
    icon: Award,
    description: 'Measure Experience, Expertise, Authoritativeness, and Trustworthiness',
  },
  {
    name: 'Semantic Search Alignment',
    icon: Search,
    description: 'Optimize for natural language queries and AI reasoning patterns',
  },
  {
    name: 'Citation & Source Quality',
    icon: Link,
    description: 'Evaluate external references and source trustworthiness',
  },
  {
    name: 'Non-Branded Visibility',
    icon: TrendingUp,
    description: 'Track brand appearance in AI responses for intent-driven queries',
  },
  {
    name: 'Competitive Positioning',
    icon: Target,
    description: 'Benchmark against competitors in AI-generated responses',
  },
];

export function ModulesOverview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
          7 Core Audit Modules
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Kasparro analyzes your brand through seven critical dimensions that determine 
          AI visibility and trustworthiness.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.name} 
                className="p-4 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-2 break-words">{module.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
