import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
