import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface Skill {
  name: string;
  level: string;
}

@Component({
  selector: 'portfolio-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 class="text-2xl font-semibold mb-4">Skills</h2>
      <ul class="grid grid-cols-2 gap-4">
        @for (skill of skills(); track $index) {
          <li class="bg-blue-100 text-blue-800 rounded px-3 py-2 font-medium" aria-label="{{ skill.name }} skill">
            {{ skill.name }} <span class="text-xs text-gray-500">({{ skill.level }})</span>
          </li>
        }
      </ul>
    </section>
  `,
  host: {
    role: 'region',
    tabindex: '0',
    'aria-label': 'Skills Section'
  }
})
export class PortfolioSkillsComponent {
  private readonly skillData = signal<Skill[]>([
    { name: 'Angular', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'RxJS', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Accessibility', level: 'Advanced' },
    { name: 'Jest', level: 'Intermediate' },
    { name: 'Cypress', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'Agile/Scrum', level: 'Advanced' }
  ]);

  readonly skills = computed(() => this.skillData());
}
