'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector, DashboardMetricsDisplay } from '@/components/features/dashboard/DashboardComponents';
import { useAppStore } from '@/lib/store';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

export default function DashboardPage() {
  const { selectedBrand } = useAppStore();

  return (
    <TooltipProvider>
      <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-[1600px] mx-auto px-8 py-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <HelpCircle className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>AI-SEO metrics measure your brand's visibility and relevance in AI search systems like ChatGPT, Perplexity, and Gemini.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-muted-foreground">Brand intelligence snapshot</p>
            </div>
            <BrandSelector />
          </div>

        {selectedBrand ? (
          <>
            <DashboardMetricsDisplay brandId={selectedBrand.id} />
            
            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 hover:scale-110">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Run Full Audit</h3>
                </div>
                <p className="text-sm text-muted-foreground">Deep-dive analysis across all 7 AI-SEO modules</p>
              </div>

              <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center transition-transform duration-200 hover:scale-110">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">View Trends</h3>
                </div>
                <p className="text-sm text-muted-foreground">Track your AI visibility performance over time</p>
              </div>

              <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center transition-transform duration-200 hover:scale-110">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Quick Wins</h3>
                </div>
                <p className="text-sm text-muted-foreground">5 high-impact optimizations you can do today</p>
              </div>
            </div>

            {/* Recent Insights */}
            <div className="bg-card rounded-lg border p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">Recent Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Brand visibility increased in product comparison queries</p>
                    <p className="text-sm text-muted-foreground mt-1">Your brand now appears in 23% more product recommendation responses from AI systems</p>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">New high-authority citation detected</p>
                    <p className="text-sm text-muted-foreground mt-1">TechCrunch article now being used as source by Perplexity AI for your brand category</p>
                    <span className="text-xs text-muted-foreground">5 hours ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-orange-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Sentiment shift in competitor positioning</p>
                    <p className="text-sm text-muted-foreground mt-1">AI systems are now highlighting your sustainability advantage over competitors</p>
                    <span className="text-xs text-muted-foreground">1 day ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-purple-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Search pattern discovery</p>
                    <p className="text-sm text-muted-foreground mt-1">Users asking "best [category] for [use-case]" — opportunity to optimize for this query type</p>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Module Performance</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Brand Visibility</span>
                      <span className="font-semibold">85/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Trust & Authority</span>
                      <span className="font-semibold">72/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Keyword Coverage</span>
                      <span className="font-semibold">68/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Content Representation</span>
                      <span className="font-semibold">78/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sentiment Positioning</span>
                      <span className="font-semibold">81/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '81%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Source Diversity</span>
                      <span className="font-semibold">65/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Competitive Context</span>
                      <span className="font-semibold">70/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">AI Platform Coverage</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">P</div>
                      <div>
                        <p className="font-medium">Perplexity AI</p>
                        <p className="text-xs text-muted-foreground">Search responses</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">82%</p>
                      <p className="text-xs text-green-600">+5%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-semibold">C</div>
                      <div>
                        <p className="font-medium">ChatGPT</p>
                        <p className="text-xs text-muted-foreground">Web search mode</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">76%</p>
                      <p className="text-xs text-green-600">+12%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">G</div>
                      <div>
                        <p className="font-medium">Gemini</p>
                        <p className="text-xs text-muted-foreground">Google AI search</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">71%</p>
                      <p className="text-xs text-green-600">+2%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">C</div>
                      <div>
                        <p className="font-medium">Claude</p>
                        <p className="text-xs text-muted-foreground">Web citations</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">68%</p>
                      <p className="text-xs text-orange-600">-1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            Select a brand to view metrics
          </div>
        )}
        </div>
      </div>
    </DashboardLayout>
    </TooltipProvider>
  );
}
