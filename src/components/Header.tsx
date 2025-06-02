'use client';

import { BarChart3, Github, Presentation, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="hidden sm:ml-10 sm:flex items-baseline space-x-4">
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
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 sm:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t">
              <a
                href="https://github.com/iamronsuez/ml-workshop-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-base font-medium">GitHub</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}