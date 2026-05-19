import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="w-full bg-gray-800 text-white p-4 flex flex-col items-center mt-10">
      <p class="text-sm">&copy; 2026 CJ De La Cruz. All rights reserved.</p>
      <nav class="mt-2">
        <a href="mailto:cjdelacruz267@gmail.com" class="text-blue-300 underline mr-4" aria-label="Email">Email</a>
      </nav>
    </footer>
  `,
  host: {
    role: 'contentinfo',
    tabindex: '0',
    'aria-label': 'Site Footer'
  }
})
export class PortfolioFooterComponent {}
