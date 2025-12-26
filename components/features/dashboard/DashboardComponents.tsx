'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppStore } from '@/lib/store';
import { Brand, DashboardMetrics } from '@/lib/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function BrandSelector() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const { selectedBrand, setSelectedBrand } = useAppStore();

  useEffect(() => {
    fetch('/data/brands.json')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        if (data.length > 0 && !selectedBrand) {
          setSelectedBrand(data[0]);
        }
      });
  }, [selectedBrand, setSelectedBrand]);

  return (
    <Select
      value={selectedBrand?.id}
      onValueChange={(value) => {
        const brand = brands.find((b) => b.id === value);
        if (brand) setSelectedBrand(brand);
      }}
    >
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SnapshotCard({ 
  title, 
  value,
  change,
  description 
}: { 
  title: string; 
  value: number;
  change: string;
  description: string;
}) {
  const percentage = value;
  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');
  
  const TrendIcon = 
    isPositive ? TrendingUp :
    isNegative ? TrendingDown :
    Minus;
  
  const trendColor = 
    isPositive ? 'text-green-600' :
    isNegative ? 'text-red-600' :
    'text-muted-foreground';

  const getScoreBadge = () => {
    if (value >= 80) return { label: 'Excellent', color: 'bg-green-600' };
    if (value >= 65) return { label: 'Good', color: 'bg-blue-600' };
    if (value >= 50) return { label: 'Fair', color: 'bg-orange-600' };
    return { label: 'Needs Work', color: 'bg-red-600' };
  };

  const scoreBadge = getScoreBadge();

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Badge className={`${scoreBadge.color} text-white`}>{scoreBadge.label}</Badge>
        </div>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-4">
        <div className="flex items-baseline gap-2 mb-3">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">/ 100</div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 bg-muted rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full transition-all ${
                value >= 80 ? 'bg-green-600' :
                value >= 65 ? 'bg-blue-600' :
                value >= 50 ? 'bg-orange-600' :
                'bg-red-600'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className={`flex items-center gap-1 text-sm font-semibold ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardMetricsDisplay({ brandId }: { brandId: string }) {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    fetch('/data/dashboard-metrics.json')
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data[brandId]);
      });
  }, [brandId]);

  if (!metrics) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SnapshotCard
        title="AI Visibility Score"
        value={metrics.aiVisibilityScore.value}
        change={`${metrics.aiVisibilityScore.changePercentage > 0 ? '+' : ''}${metrics.aiVisibilityScore.changePercentage}%`}
        description="How often your brand appears in AI responses"
      />
      <SnapshotCard
        title="Trust / E-E-A-T Score"
        value={metrics.trustScore.value}
        change={`${metrics.trustScore.changePercentage > 0 ? '+' : ''}${metrics.trustScore.changePercentage}%`}
        description="Experience, Expertise, Authority, Trust signals"
      />
      <SnapshotCard
        title="Non-Branded Coverage"
        value={metrics.keywordCoverage.value}
        change={`${metrics.keywordCoverage.changePercentage > 0 ? '+' : ''}${metrics.keywordCoverage.changePercentage}%`}
        description="Visibility in intent-driven, non-branded queries"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
          <CardDescription className="text-xs">Most recent data refresh</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {new Date(metrics.lastAuditTimestamp).toLocaleDateString()}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {new Date(metrics.lastAuditTimestamp).toLocaleTimeString()}
          </div>
          <Badge variant="secondary" className="mt-3">Up to date</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
