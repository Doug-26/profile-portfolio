import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from './components/portfolio-header.component';
import { PortfolioAboutComponent } from './components/portfolio-about.component';
import { PortfolioExperienceComponent } from './components/portfolio-experience.component';
import { PortfolioSkillsComponent } from './components/portfolio-skills.component';
import { PortfolioFooterComponent } from './components/portfolio-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PortfolioHeaderComponent,
    PortfolioAboutComponent,
    PortfolioExperienceComponent,
    PortfolioSkillsComponent,
    PortfolioFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('profile-portfolio');
}
