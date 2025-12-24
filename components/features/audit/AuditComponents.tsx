'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Network, 
  Award, 
  Search, 
  Link, 
  TrendingUp, 
  Target,
  CheckCircle,
  AlertTriangle,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuditModuleData {
  id: string;
  name: string;
  score: number;
  scoreLabel: string;
  summary: string;
  insights: string[];
  issues: Array<{
    severity: string;
    title: string;
    description: string;
  }>;
  recommendations: string[];
}

const iconMap: Record<string, typeof FileText> = {
  'brand-visibility': Target,
  'trust-authority': Award,
  'content-representation': FileText,
  'keyword-coverage': Search,
  'sentiment-positioning': TrendingUp,
  'source-diversity': Network,
  'competitive-context': Link,
};

export function ModuleSidebar({ 
  modules, 
  selectedModuleId, 
  onSelectModule 
}: { 
  modules: AuditModuleData[]; 
  selectedModuleId: string | null;
  onSelectModule: (id: string) => void;
}) {
  return (
    <div className="w-80 border-r bg-muted/20 p-4 space-y-2">
      <h2 className="font-semibold mb-4 px-3">Audit Modules</h2>
      {modules.map((module) => {
        const Icon = iconMap[module.id] || FileText;
        const isSelected = module.id === selectedModuleId;
        
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={cn(
              'w-full text-left p-3 rounded-lg transition-colors',
              isSelected 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            )}
          >
            <div className="flex items-start gap-3">
              <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{module.name}</div>
                <div className={cn(
                  'text-xs mt-1',
                  isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                )}>
                  Score: {module.score}/100 • {module.scoreLabel}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function ModuleDetailPanel({ module }: { module: AuditModuleData }) {
  const Icon = iconMap[module.id] || FileText;
  const scorePercentage = module.score;

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return AlertCircle;
      case 'medium':
        return AlertTriangle;
      case 'low':
        return CheckCircle;
      default:
        return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{module.name}</h1>
            <p className="text-muted-foreground">{module.summary}</p>
          </div>
        </div>

        {/* Score */}
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-baseline gap-3 mb-3">
              <div className="text-5xl font-bold">{module.score}</div>
              <div className="text-xl text-muted-foreground">/ 100</div>
              <Badge variant="secondary">{module.scoreLabel}</Badge>
            </div>
            <div className="w-full bg-background rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full transition-all" 
                style={{ width: `${scorePercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      {module.insights.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <div className="space-y-2">
            {module.insights.map((insight, idx) => (
              <Card key={idx} className="border-l-4 border-l-blue-500">
                <CardContent className="pt-4">
                  <p className="text-sm">{insight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Issues */}
      {module.issues.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Issues & Flags</h2>
          <div className="space-y-4">
            {module.issues.map((issue, idx) => {
              const SeverityIcon = getSeverityIcon(issue.severity);
              return (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Badge className={getSeverityColor(issue.severity)}>
                        <SeverityIcon className="h-3 w-3 mr-1" />
                        {issue.severity}
                      </Badge>
                      <CardTitle className="text-base flex-1">{issue.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Recommendations */}
      {module.recommendations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <div className="space-y-3">
            {module.recommendations.map((rec, idx) => (
              <Card key={idx} className="border-l-4 border-l-green-500">
                <CardContent className="pt-4">
                  <p className="text-sm">{rec}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}