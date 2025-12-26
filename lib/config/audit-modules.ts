/**
 * Audit Module Configuration
 * Dynamically discovers available audit modules
 */

export interface AuditModuleConfig {
  id: string;
  name: string;
  category: 'visibility' | 'trust' | 'content' | 'competitive';
  order: number;
}

/**
 * Module metadata for ordering and categorization
 * Only used for display order - actual modules are loaded dynamically
 */
const MODULE_METADATA: Record<string, Omit<AuditModuleConfig, 'id'>> = {
  'brand-visibility': { name: 'Brand Visibility', category: 'visibility', order: 1 },
  'trust-authority': { name: 'Trust & Authority', category: 'trust', order: 2 },
  'content-representation': { name: 'Content Representation', category: 'content', order: 3 },
  'keyword-coverage': { name: 'Keyword Coverage', category: 'visibility', order: 4 },
  'sentiment-positioning': { name: 'Sentiment & Positioning', category: 'content', order: 5 },
  'source-diversity': { name: 'Source Diversity', category: 'trust', order: 6 },
  'competitive-context': { name: 'Competitive Context', category: 'competitive', order: 7 },
};

/**
 * Dynamically discover available audit modules from data directory
 * Returns IDs of modules that have corresponding JSON files
 */
export async function discoverModuleIds(): Promise<string[]> {
  const moduleIds = Object.keys(MODULE_METADATA);
  
  // Attempt to fetch each module to see which ones exist
  const checks = await Promise.all(
    moduleIds.map(async (id) => {
      try {
        const response = await fetch(`/data/audit-modules/${id}.json`, { method: 'HEAD' });
        return response.ok ? id : null;
      } catch {
        return null;
      }
    })
  );
  
  return checks.filter((id): id is string => id !== null)
    .sort((a, b) => MODULE_METADATA[a].order - MODULE_METADATA[b].order);
}

/**
 * Get all module IDs in order (synchronous version using metadata)
 * Use this for initial rendering, then switch to discovered modules
 */
export const getModuleIds = (): string[] => {
  return Object.keys(MODULE_METADATA).sort(
    (a, b) => MODULE_METADATA[a].order - MODULE_METADATA[b].order
  );
};

/**
 * Get module config by ID
 */
export const getModuleConfig = (id: string): AuditModuleConfig | undefined => {
  const metadata = MODULE_METADATA[id];
  if (!metadata) return undefined;
  return { id, ...metadata };
};

/**
 * Get modules by category
 */
export const getModulesByCategory = (category: AuditModuleConfig['category']): AuditModuleConfig[] => {
  return Object.entries(MODULE_METADATA)
    .filter(([_, meta]) => meta.category === category)
    .map(([id, meta]) => ({ id, ...meta }))
    .sort((a, b) => a.order - b.order);
};
