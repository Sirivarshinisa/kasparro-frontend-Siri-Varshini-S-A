import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Input Assembly',
    description: 'Collect brand content, competitive data, and AI search patterns',
    bgColor: 'bg-white dark:bg-card',
  },
  {
    number: '02',
    title: 'Context Packing',
    description: 'Structure data for comprehensive AI analysis',
    bgColor: 'bg-muted/30 dark:bg-card/80',
  },
  {
    number: '03',
    title: 'Module Processing',
    description: '7 parallel audits evaluate different dimensions',
    bgColor: 'bg-muted/50 dark:bg-card/60',
  },
  {
    number: '04',
    title: 'Actionable Insights',
    description: 'Prioritized recommendations with impact estimates',
    bgColor: 'bg-muted/70 dark:bg-card/40',
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-muted/20 relative animate-in fade-in duration-700">
      <div className="container mx-auto max-w-[1600px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700 px-4">
          How Kasparro Works
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 px-4">
          Our AI-native pipeline analyzes your brand's presence across next-generation search engines.
        </p>
        <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch md:items-center justify-center gap-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center md:items-stretch">
              <Card 
                className={`p-4 sm:p-6 w-full md:w-60 lg:w-64 border-2 hover:border-primary/50 flex-shrink-0 ${step.bgColor}`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-4 lg:px-6">
                  <ArrowRight className="text-primary h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
