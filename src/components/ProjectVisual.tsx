/** Presentation-only illustrations. Project screenshots and videos are shown on detail pages. */
export function ProjectVisual({slug}: {slug: string}) {
  if (slug === 'nongjangs') return <div className="visual browser-visual" aria-hidden="true">
    <div className="mock-browser"><div className="mock-toolbar"><i/><i/><i/><span className="mock-address"/></div>
      <div className="mock-site-header">농장스 <em/></div><div className="mock-site-content">
      <div className="mock-site-banner"><span><strong>우리 농장의 신선함</strong><small>오늘의 농산물을 만나보세요</small></span><b/></div>
      <div className="mock-products"><div className="mock-product"><i/></div><div className="mock-product"><i/></div><div className="mock-product"><i/></div></div>
    </div></div></div>;
  if (slug === 'aurora') return <div className="visual" aria-hidden="true"><div className="phone"><div className="phone-notch"/><div className="phone-screen"><div className="phone-icon">✳</div><strong>Aurora</strong><small>새로운 대화를 시작하세요</small><b/></div></div></div>;
  if (slug === 'trust-edge') return <div className="visual" aria-hidden="true"><div className="security-window"><div className="security-url">https://example.com</div><div className="security-body"><div className="security-check">✓</div><div><strong>안전한 링크</strong><small>검사가 완료되었습니다</small></div></div><div className="security-meter"/></div></div>;
  return <div className="visual" aria-hidden="true"><div className="film-window"><div className="film-scene"/><div className="film-timeline"><i/><i/><i/><i/></div></div></div>;
}
