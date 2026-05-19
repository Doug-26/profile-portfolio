import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type RevealVariant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') variant: RevealVariant | '' = 'slide-up';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const host = this.el.nativeElement;
    const variant = this.variant || 'slide-up';
    this.renderer.addClass(host, 'reveal');
    this.renderer.addClass(host, `reveal-${variant}`);
    if (this.revealDelay > 0) {
      this.renderer.setStyle(host, 'transition-delay', `${this.revealDelay}ms`);
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'in-view');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'in-view');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
