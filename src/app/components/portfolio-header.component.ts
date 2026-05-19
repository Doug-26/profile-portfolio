import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 flex flex-col items-center shadow-md">
      <h1 class="text-3xl font-bold mb-2">Christian Jay P. De La Cruz</h1>
      <p class="text-lg">Software Engineer | Multi-platform Frontend Angular Developer</p>
    </header>
  `,
  host: {
    role: 'banner',
    tabindex: '0',
    'aria-label': 'Site Header'
  }
})
export class PortfolioHeaderComponent {}
