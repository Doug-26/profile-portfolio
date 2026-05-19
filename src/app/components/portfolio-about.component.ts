import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'portfolio-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 class="text-2xl font-semibold mb-4">About Me</h2>
      <p class="text-gray-700 text-base">
        Hi, I'm Christian Jay P. De La Cruz, a Software Engineer based in Naga City, Camarines Sur, Bicol. I specialize in Angular and Ionic Framework, delivering robust, scalable, and accessible web applications. My experience includes leading technical teams, performing critical issue analysis, and implementing CI/CD pipelines with AWS, Azure, and Firebase. I am committed to best practices, security, and continuous improvement, ensuring smooth onboarding and consistent production rollout. I thrive in cross-functional collaboration and enjoy mentoring team members for successful project delivery.
      </p>
    </section>
  `,
  host: {
    role: 'region',
    tabindex: '0',
    'aria-label': 'About Me Section'
  }
})
export class PortfolioAboutComponent {}
