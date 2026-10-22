'use client';

import { useEffect } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'portfolio-theme';

function updateTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101113' : '#fbfbfa');
}

export function ThemeToggle() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    function onChange(event: MediaQueryListEvent) {
      try { if (localStorage.getItem(KEY) === 'dark' || localStorage.getItem(KEY) === 'light') return; } catch {}
      updateTheme(event.matches ? 'dark' : 'light');
    }
    preference.addEventListener('change', onChange);
    return () => preference.removeEventListener('change', onChange);
  }, []);
  function toggle() {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    updateTheme(next);
    try { localStorage.setItem(KEY, next); } catch {}
  }
  return <button className="theme-toggle" type="button" aria-label="라이트/다크 모드 전환" title="라이트/다크 모드 전환" onClick={toggle}>
    <svg className="theme-icon theme-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.985 12.486A9 9 0 0 1 11.514 3.015a9 9 0 1 0 9.47 9.47Z"/></svg>
    <svg className="theme-icon theme-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
  </button>;
}
