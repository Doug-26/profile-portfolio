import { Component } from '@angular/core';
import { profile, Project, ProjectAccent } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

interface AccentStops {
  from: string;
  via: string;
  to: string;
}

const ACCENT_STOPS: Record<ProjectAccent, AccentStops> = {
  violet: { from: 'oklch(60% 0.24 295)', via: 'oklch(65% 0.26 320)', to: 'oklch(70% 0.22 340)' },
  pink:   { from: 'oklch(72% 0.24 350)', via: 'oklch(70% 0.27 330)', to: 'oklch(68% 0.24 300)' },
  orange: { from: 'oklch(72% 0.20 50)',  via: 'oklch(68% 0.24 30)',  to: 'oklch(65% 0.25 10)'  },
  blue:   { from: 'oklch(62% 0.20 235)', via: 'oklch(58% 0.24 265)', to: 'oklch(55% 0.26 295)' },
  red:    { from: 'oklch(70% 0.21 25)',  via: 'oklch(65% 0.24 5)',   to: 'oklch(62% 0.26 345)' },
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  protected readonly profile = profile;

  protected stopsFor(project: Project): AccentStops {
    return ACCENT_STOPS[project.accent];
  }
}
