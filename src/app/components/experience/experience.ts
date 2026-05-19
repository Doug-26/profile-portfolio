import { Component } from '@angular/core';
import { profile } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  protected readonly profile = profile;
}
