'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector } from '@/components/features/dashboard/DashboardComponents';
import { ModuleSidebar, ModuleDetailPanel } from '@/components/features/audit/AuditComponents';
import { useAppStore } from '@/lib/store';

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

const moduleIds = [
  'brand-visibility',
  'trust-authority',
  'content-representation',
  'keyword-coverage',
  'sentiment-positioning',
  'source-diversity',
  'competitive-context'
];

export default function AuditPage() {
  const { selectedBrand, selectedModuleId, setSelectedModuleId } = useAppStore();
  const [modules, setModules] = useState<AuditModuleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedBrand) {
      setLoading(true);
      Promise.all(
        moduleIds.map(id => 
          fetch(`/data/audit-modules/${id}.json`)
            .then(res => res.json())
            .catch(() => null)
        )
      ).then(results => {
        const validModules = results.filter(Boolean) as AuditModuleData[];
        setModules(validModules);
        if (validModules.length > 0 && !selectedModuleId) {
          setSelectedModuleId(validModules[0].id);
        }
        setLoading(false);
      });
    }
  }, [selectedBrand, selectedModuleId, setSelectedModuleId]);

  const selectedModule = modules.find((m) => m.id === selectedModuleId);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI-SEO Audit</h1>
            <p className="text-muted-foreground">Deep analysis across 7 core modules</p>
          </div>
          <BrandSelector />
        </div>

        {!selectedBrand ? (
          <div className="text-center py-12 text-muted-foreground">
            Select a brand to view audit
          </div>
        ) : loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading audit data...
          </div>
        ) : modules.length > 0 ? (
          <div className="flex -mx-6 -mb-6" style={{ height: 'calc(100vh - 200px)' }}>
            <ModuleSidebar 
              modules={modules} 
              selectedModuleId={selectedModuleId}
              onSelectModule={setSelectedModuleId}
            />
            {selectedModule && (
              <ModuleDetailPanel module={selectedModule} />
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No audit data available
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
