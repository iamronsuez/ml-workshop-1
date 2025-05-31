'use client';

import { BarChart3, Github, Presentation } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/lab-1', label: 'Lab 1' },
    { href: '/lab-2', label: 'Lab 2' },
    { href: '/lab-3', label: 'Lab 3' },
    { href: '/metrics', label: 'Metrics' },
    { href: '/percentiles', label: 'Percentiles' },
    { href: '/slides', label: 'Slides' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold">ML Workshop</h1>
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
     
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/iamronsuez/ml-workshop-1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}