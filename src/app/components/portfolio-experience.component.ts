import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

@Component({
  selector: 'portfolio-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 class="text-2xl font-semibold mb-4">Experience</h2>
      <ul>
        @for (exp of experiences(); track $index) {
          <li class="mb-4">
            <div class="font-bold text-lg">{{ exp.company }}</div>
            <div class="text-blue-600">{{ exp.role }} <span class="text-gray-500">({{ exp.period }})</span></div>
            <div class="text-gray-700">{{ exp.description }}</div>
          </li>
        }
      </ul>
    </section>
  `,
  host: {
    role: 'region',
    tabindex: '0',
    'aria-label': 'Experience Section'
  }
})
export class PortfolioExperienceComponent {
  private readonly expData = signal<Experience[]>([
    {
      company: 'Globe Telecom',
      role: 'Senior Software Engineer',
      period: '2022 - Present',
      description: 'Architected and developed scalable Angular applications for enterprise clients. Led frontend team, implemented best practices, and ensured accessibility compliance.'
    },
    {
      company: 'Accenture',
      role: 'Software Engineer',
      period: '2018 - 2022',
      description: 'Developed web solutions using Angular, TypeScript, and RxJS. Collaborated with cross-functional teams and delivered high-quality, maintainable code.'
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2016 - 2018',
      description: 'Built custom websites and web apps for small businesses, focusing on performance, accessibility, and modern design.'
    }
  ]);

  readonly experiences = computed(() => this.expData());
}
