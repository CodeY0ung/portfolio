import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import './globals.css';

export const metadata: Metadata = {
  title: {default:'이우영 — Backend Developer',template:'%s'},
  description:'이우영의 백엔드 개발자 포트폴리오. 프로젝트와 개발 과정을 소개합니다.',
};
const themeInit = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='dark'&&t!=='light')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);document.querySelector('meta[name="theme-color"]').setAttribute('content',t==='dark'?'#101113':'#fbfbfa');}catch(e){}})();`;

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
  return <html lang="ko" suppressHydrationWarning><head><meta name="theme-color" content="#fbfbfa"/><script dangerouslySetInnerHTML={{__html:themeInit}}/></head>
    <body><a className="skip-link" href="#main">본문으로 이동</a>
      <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label="이우영 홈">Wooyoung<span>.</span></Link>
        <nav aria-label="주요 메뉴"><Link href="/#projects">프로젝트</Link><Link href="/#about">소개</Link>
          <a className="nav-github" target="_blank" rel="noopener noreferrer" href="https://github.com/CodeY0ung">GitHub <span aria-hidden="true">↗</span></a>
          <ThemeToggle/>
        </nav></div></header>
      <main id="main">{children}</main>
      <footer className="site-footer"><div className="shell"><span>© 2026 Wooyoung Lee</span><a href="https://github.com/CodeY0ung" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></footer>
    </body></html>;
}
