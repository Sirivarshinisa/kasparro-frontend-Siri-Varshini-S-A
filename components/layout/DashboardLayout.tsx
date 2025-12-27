'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FileSearch, 
  Network,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navigation = [
    { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Audit', href: '/app/audit', icon: FileSearch },
    { name: 'Architecture', href: '/app/architecture', icon: Network },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border rounded-md shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 w-64 border-r bg-muted/30 transition-transform duration-300 ease-in-out",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-4 sm:p-6 flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
            <ArrowLeft className="h-4 w-4" />
            Kasparro
          </Link>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
        <nav className="px-3 sm:px-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block absolute bottom-6 left-6">
          <ThemeToggle />
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 sm:p-6 lg:pl-6 pt-16 lg:pt-6">
          {children}
        </div>
      </main>
    </div>
  );
}
