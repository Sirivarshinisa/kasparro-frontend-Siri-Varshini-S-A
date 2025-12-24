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
    <section className="py-20 px-4 bg-muted/10 animate-in fade-in duration-700">
      <div className="container mx-auto max-w-[1600px]">
        <h2 className="text-3xl font-bold text-center mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
          7 Core Audit Modules
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          Kasparro analyzes your brand through seven critical dimensions that determine 
          AI visibility and trustworthiness.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.name} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0 transition-transform duration-200 hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
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
