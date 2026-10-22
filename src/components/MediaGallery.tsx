'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ProjectMedia } from '@/lib/projects';

export function MediaGallery({media}: {media: ProjectMedia[]}) {
  const [selected, setSelected] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const step = useCallback((delta: number) => setSelected(index => index === null ? null : (index + delta + media.length) % media.length), [media.length]);
  const open = selected !== null;
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    function onKey(e: KeyboardEvent) {
      if(e.key === 'Escape') {e.preventDefault();close();}
      if(e.key === 'ArrowLeft') step(-1);
      if(e.key === 'ArrowRight') step(1);
      if(e.key === 'Tab') {
        const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.lightbox button'));
        if(!buttons.length) return;
        const first=buttons[0],last=buttons[buttons.length-1];
        if(e.shiftKey && document.activeElement===first) {e.preventDefault();last.focus();}
        else if(!e.shiftKey && document.activeElement===last) {e.preventDefault();first.focus();}
      }
    }
    window.addEventListener('keydown', onKey);
    return () => {document.body.style.overflow=previous;window.removeEventListener('keydown', onKey);lastFocused.current?.focus();};
  }, [open, close, step]);
  const current=selected===null?null:media[selected];
  return <>
    <div className="gallery">{media.map((item,i) => <button key={item.src} type="button" className="media-card" onClick={() => {lastFocused.current=document.activeElement as HTMLElement;setSelected(i);}} aria-label={`${item.label} 크게 보기`}>
      <span className="media-thumb">{item.type==='image' ? <Image src={item.src} width={320} height={185} alt={item.label} style={{objectFit:'contain',height:'100%'}}/> : <span className="media-symbol" aria-hidden="true">▶</span>}</span>
      <span className="media-caption">{item.label}{item.type==='video'?' ↗':''}</span>
    </button>)}</div>
    {current && <div className="lightbox" role="presentation" onMouseDown={e => {if(e.currentTarget===e.target) close();}}>
      <div className="lightbox-inner" role="dialog" aria-modal="true" aria-label="미디어 크게 보기">
        <button ref={closeButton} type="button" className="lightbox-close" onClick={close} aria-label="닫기">✕</button>
        <div className="lightbox-content">{current.type==='video' ? <video key={current.src} src={current.src} controls autoPlay playsInline/> : <Image src={current.src} alt={current.label} width={1200} height={900} style={{width:'auto',height:'auto',maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}}/>}</div>
        <div className="lightbox-foot"><span className="lightbox-label">{current.label}</span><div className="lightbox-controls">
          <button type="button" onClick={() => step(-1)} aria-label="이전">←</button><span className="lightbox-count">{selected!+1} / {media.length}</span><button type="button" onClick={() => step(1)} aria-label="다음">→</button>
        </div></div>
      </div>
    </div>}
  </>;
}
