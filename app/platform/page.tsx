import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PlatformPage() {
  return (
    <PublicLayout>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-[1400px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">Product Mechanics</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 text-center">
            How Kasparro processes brand data and generates AI-SEO intelligence.
          </p>
          
          {/* Audit Pipeline */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Audit Pipeline</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-2 sm:mb-3 text-xs">Input</Badge>
                <h3 className="font-semibold text-sm sm:text-base mb-2">InputAssembler</h3>
                <p className="text-xs text-muted-foreground mb-2">Accepts: brand name, primary domain, competitor list (up to 10), target keywords (20-50)</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Crawl sitemap.xml + robots.txt</li>
                  <li>• Extract schema.org markup</li>
                  <li>• Collect backlink profiles (Ahrefs API)</li>
                  <li>• Query AI systems with test prompts</li>
                </ul>
              </Card>
              
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-2 sm:mb-3 text-xs">Context</Badge>
                <h3 className="font-semibold text-sm sm:text-base mb-2">ContextPack</h3>
                <p className="text-xs text-muted-foreground mb-2">Outputs: JSON entity graph, normalized content corpus, signal vectors</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Clean HTML → plain text (Readability.js)</li>
                  <li>• Run NER (spaCy) + embeddings (MiniLM)</li>
                  <li>• Build Neo4j knowledge graph</li>
                  <li>• Index in vector store (Pinecone)</li>
                </ul>
              </Card>
              
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-2 sm:mb-3 text-xs">Modules</Badge>
                <h3 className="font-semibold text-sm sm:text-base mb-2">7 Audit Modules</h3>
                <p className="text-xs text-muted-foreground mb-2">Run in parallel (avg 3-5 min per brand), consume ContextPack data</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Each module: scoring algorithm + issue detector</li>
                  <li>• Output: 0-100 score + findings array</li>
                  <li>• Metrics logged to InfluxDB for trends</li>
                </ul>
              </Card>
              
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-2 sm:mb-3 text-xs">Output</Badge>
                <h3 className="font-semibold text-sm sm:text-base mb-2">Results</h3>
                <p className="text-xs text-muted-foreground mb-2">JSON report + dashboard UI + PDF export + API access</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• 7 module scores (0-100 scale)</li>
                  <li>• Issues by severity (critical/high/medium)</li>
                  <li>• Recommendations with effort/impact ratings</li>
                  <li>• Competitive benchmarks (your brand vs. 5 competitors)</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Input: What Data We Consume */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Input: Data Sources</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Brand Content</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Crawls your domain (sitemap.xml), extracts structured data (JSON-LD, Microdata), and indexes all public pages.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Input: Primary domain URL → Output: ~500-5000 pages indexed with metadata
                </p>
              </Card>
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Competitive Data</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Runs same query set against competitors' brands, comparing citation frequency and positioning.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Input: Competitor domains (max 10) → Output: Relative visibility scores per query category
                </p>
              </Card>
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">AI Query Patterns</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Executes 50-100 queries via Perplexity/You.com APIs, parses responses for brand mentions and citation context.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Input: Target keywords → Output: Mention rate (%), avg citation rank, sentiment distribution
                </p>
              </Card>
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Entity Relationships</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Builds Neo4j graph linking brand → products → people → concepts, annotated with relationship types and confidence scores.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Input: Brand name + domain → Output: ~200-1000 entities, 500-5000 relationships
                </p>
              </Card>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Technical Deep Dive</h2>
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">How We Measure AI Visibility</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  Unlike traditional SEO tools that track search rankings, Kasparro evaluates brand 
                  presence in AI-generated responses. We run controlled queries across multiple AI systems, 
                  extracting brand mentions, citation patterns, competitive positioning, and sentiment.
                </p>
                <div className="bg-muted p-3 sm:p-4 rounded text-xs font-mono overflow-x-auto">
                  <div className="mb-2 text-foreground text-xs sm:text-sm">Example Query Flow:</div>
                  <div>1. Generate query set from brand keywords + intent patterns</div>
                  <div>2. Execute queries via API (Perplexity, You.com) or simulate with local LLM</div>
                  <div>3. Parse responses: extract entities, citations, positioning</div>
                  <div>4. Score visibility: mention frequency, citation rank, context quality</div>
                  <div>5. Compare vs. baseline + competitors</div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Entity Graph Construction</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  We build a knowledge graph specific to your brand, mapping relationships between 
                  entities (brand, products, people, concepts) and their attributes. This mirrors how 
                  AI models internally represent information and helps identify missing connections.
                </p>
                <div className="bg-muted p-3 sm:p-4 rounded text-xs overflow-x-auto">
                  <div className="font-semibold mb-2">Graph Components:</div>
                  <div className="ml-3 sm:ml-4 space-y-1 text-muted-foreground">
                    <div>• <strong>Nodes:</strong> Entities (brand, products, people, competitors, concepts)</div>
                    <div>• <strong>Edges:</strong> Relationships (produces, competes-with, authoredBy, relatedTo)</div>
                    <div>• <strong>Attributes:</strong> Entity properties (description, category, authority score)</div>
                    <div>• <strong>Provenance:</strong> Where relationships are documented (URLs, sources)</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Trust Signal Analysis</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  AI models prioritize authoritative sources. We evaluate E-E-A-T signals: 
                  Experience, Expertise, Authoritativeness, and Trustworthiness—analyzing author credentials, 
                  publication reputation, citation patterns, and content quality markers.
                </p>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-xs">
                  <div className="bg-muted p-2 sm:p-3 rounded">
                    <div className="font-semibold mb-1">Experience Signals</div>
                    <div className="text-muted-foreground">First-hand accounts, case studies, original research, product usage evidence</div>
                  </div>
                  <div className="bg-muted p-2 sm:p-3 rounded">
                    <div className="font-semibold mb-1">Expertise Signals</div>
                    <div className="text-muted-foreground">Author credentials, academic citations, industry recognition, technical depth</div>
                  </div>
                  <div className="bg-muted p-2 sm:p-3 rounded">
                    <div className="font-semibold mb-1">Authoritativeness</div>
                    <div className="text-muted-foreground">Domain reputation, backlink quality, media mentions, industry partnerships</div>
                  </div>
                  <div className="bg-muted p-2 sm:p-3 rounded">
                    <div className="font-semibold mb-1">Trustworthiness</div>
                    <div className="text-muted-foreground">HTTPS, privacy policies, transparent sourcing, fact-checking, update frequency</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Output: What Brands Receive */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Output: Deliverables</h2>
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary flex-shrink-0">01</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Module Scores</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Each module returns 0-100 score + trend indicator (↑/↓/→) comparing to previous audit.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Example: Brand Visibility: 67/100 (↑12% from last month)
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary flex-shrink-0">02</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Issue Detection</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Ranked list of specific problems: missing schema markup, low authority backlinks, inconsistent entity references.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Example: "Critical: No structured data on 87% of product pages"
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary flex-shrink-0">03</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Recommendations</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Prioritized actions with effort (hours) and expected impact (+X points per module).
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Example: "Add Product schema to 10 pages (2 hrs) → +15 pts Trust & Authority"
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary flex-shrink-0">04</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Trend Analysis</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Time-series data showing score evolution, stored in InfluxDB, visualized as line charts.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Example: "Visibility increased 23% over 90 days after schema implementation"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Differentiator */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Key Differentiator</h2>
            <Card className="p-4 sm:p-6 md:p-8 bg-primary/5 border-primary/20">
              <p className="text-xs sm:text-sm text-muted-foreground">
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
