import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PlatformPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-[1400px]">
          <h1 className="text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Product Mechanics</h1>
          <p className="text-xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
            How Kasparro processes brand data and generates AI-SEO intelligence.
          </p>
          
          {/* Audit Pipeline */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h2 className="text-2xl font-bold mb-6">Audit Pipeline</h2>
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 animate-in fade-in zoom-in-95 duration-500 delay-500">
                  <Badge className="mb-3">Input</Badge>
                  <h3 className="font-semibold mb-2">InputAssembler</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand content ingestion</li>
                    <li>• Competitor data collection</li>
                    <li>• AI query patterns</li>
                    <li>• Structured data extraction</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground animate-pulse">→</div>
                <div className="flex-1 animate-in fade-in zoom-in-95 duration-500 delay-600">
                  <Badge className="mb-3">Context</Badge>
                  <h3 className="font-semibold mb-2">ContextPack</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Normalize content</li>
                    <li>• Build entity graph</li>
                    <li>• Extract signals</li>
                    <li>• Prepare for analysis</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground animate-pulse">→</div>
                <div className="flex-1 animate-in fade-in zoom-in-95 duration-500 delay-700">
                  <Badge className="mb-3">Modules</Badge>
                  <h3 className="font-semibold mb-2">7 Audit Modules</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand Visibility</li>
                    <li>• Trust & Authority</li>
                    <li>• Content Representation</li>
                    <li>• +4 more dimensions</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground animate-pulse">→</div>
                <div className="flex-1 animate-in fade-in zoom-in-95 duration-500 delay-800">
                  <Badge className="mb-3">Output</Badge>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scores per module</li>
                    <li>• Issues & flags</li>
                    <li>• Recommendations</li>
                    <li>• Priority actions</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Input: What Data We Consume */}
          <div className="mb-16 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="text-2xl font-bold mb-6">Input: Data Sources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-in fade-in zoom-in-95 duration-500 delay-600">
                <h3 className="font-semibold mb-3">Brand Content</h3>
                <p className="text-sm text-muted-foreground">
                  Public web content, documentation, metadata, and structured data.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-in fade-in zoom-in-95 duration-500 delay-700">
                <h3 className="font-semibold mb-3">Competitive Data</h3>
                <p className="text-sm text-muted-foreground">
                  How competitors appear in AI-generated responses and their positioning.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-in fade-in zoom-in-95 duration-500 delay-800">
                <h3 className="font-semibold mb-3">AI Query Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  Real queries from ChatGPT, Perplexity, and other AI systems.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-in fade-in zoom-in-95 duration-500 delay-900">
                <h3 className="font-semibold mb-3">Entity Relationships</h3>
                <p className="text-sm text-muted-foreground">
                  Connections between brand, products, people, and industry concepts.
                </p>
              </Card>
            </div>
          </div>

          {/* Output: What Brands Receive */}
          <div className="mb-16 animate-in fade-in slide-in-from-right-4 duration-700 delay-700">
            <h2 className="text-2xl font-bold mb-6">Output: Deliverables</h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-3 duration-500 delay-800">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary transition-transform duration-300 hover:scale-110">01</div>
                  <div>
                    <h3 className="font-semibold mb-2">Module Scores</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantitative scores for each of 7 audit modules showing performance across dimensions.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-3 duration-500 delay-900">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary transition-transform duration-300 hover:scale-110">02</div>
                  <div>
                    <h3 className="font-semibold mb-2">Issue Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Specific problems ranked by severity with descriptions of impact on AI visibility.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-3 duration-500 delay-1000">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary transition-transform duration-300 hover:scale-110">03</div>
                  <div>
                    <h3 className="font-semibold mb-2">Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Actionable steps to improve scores with effort and impact estimates.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-left-3 duration-500 delay-[1100ms]">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary transition-transform duration-300 hover:scale-110">04</div>
                  <div>
                    <h3 className="font-semibold mb-2">Trend Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Historical changes in visibility and trust metrics over time.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Differentiator */}
          <div className="animate-in fade-in zoom-in-95 duration-700 delay-[1200ms]">
            <h2 className="text-2xl font-bold mb-6">Key Differentiator</h2>
            <Card className="p-8 bg-primary/5 border-primary/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
              <p className="text-sm text-muted-foreground">
                Kasparro is built for AI-first search, not retrofitted from traditional SEO tools. 
                The platform analyzes how AI models understand, trust, and cite brands — not just search engine rankings.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
