export interface SkillGroup {
  name: string;
  items: string[];
  icon: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  date: string;
}

export interface Certification {
  name: string;
  year: number;
}

export type ProjectAccent = 'violet' | 'pink' | 'orange' | 'blue' | 'red';

export interface Project {
  title: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: ProjectAccent;
  context: 'work' | 'personal';
  initial: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubHandle: string;
  resumeFile: string;
  resumeDownloadName: string;
  tagline: string;
  bio: string;
  yearsAtAccenture: string;
  skillGroups: SkillGroup[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: Certification[];
  leadership: string;
  projects: Project[];
}

export const profile: Profile = {
  name: 'Christian Jay P. De La Cruz',
  initials: 'CJ',
  title: 'Software Engineer',
  subtitle: 'Custom Software Engineer Associate · Accenture',
  location: 'Naga City, Camarines Sur, Bicol',
  email: 'cjdelacruz267@gmail.com',
  phone: '09516909596',
  github: 'https://github.com/Doug-26',
  githubHandle: 'Doug-26',
  resumeFile: 'cv-De-La-Cruz.pdf',
  resumeDownloadName: 'Christian-Jay-De-La-Cruz-Resume.pdf',
  tagline:
    'I build fast, accessible web & mobile experiences — modernizing Angular/Ionic apps, shipping .NET-backed features, and automating mobile delivery.',
  bio: 'Software engineer with 4+ years at Accenture, focused on Angular, Ionic, and .NET. I lead framework modernizations, build responsive UI components against REST APIs, and ship mobile build automation through Azure Pipelines and Firebase. I enjoy turning messy upgrade paths into clean, maintainable codebases — and helping teammates pick up new tech along the way.',
  yearsAtAccenture: '4+',
  skillGroups: [
    {
      name: 'Frontend',
      icon: 'layout',
      items: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Responsive Design'],
    },
    {
      name: 'Backend & Database',
      icon: 'server',
      items: ['.NET Framework', 'SQL Server'],
    },
    {
      name: 'Cloud',
      icon: 'cloud',
      items: ['AWS', 'Azure', 'Firebase'],
    },
    {
      name: 'Development Tools',
      icon: 'wrench',
      items: ['Git', 'VS Code', 'Visual Studio', 'Postman', 'Power Apps'],
    },
    {
      name: 'AI Tools',
      icon: 'sparkles',
      items: ['GitHub Copilot', 'Claude Code', 'ChatGPT'],
    },
    {
      name: 'Collaboration',
      icon: 'users',
      items: ['ServiceNow', 'Code Reviews', 'Technical Docs'],
    },
  ],
  experience: [
    {
      company: 'Accenture',
      role: 'Custom Software Engineer Associate',
      start: 'Sep 2021',
      end: 'Present',
      location: 'Philippines',
      bullets: [
        'Led the Angular v15→v20 and Ionic v4→v8 upgrades across multiple projects, improving performance and cutting long-standing technical debt.',
        'Designed and shipped responsive Angular UI components wired to RESTful and .NET Core APIs for consistent web/mobile experiences.',
        'Contributed to full-stack features — authentication, data management, reporting — and helped enhance .NET backend modules with unit tests and API version upgrades.',
        'Built mobile build distribution automation with Azure Pipelines and Firebase CLI, getting builds to testers faster and more reliably.',
        'Resolved and tracked defects through Azure DevOps and managed incidents and requests in ServiceNow.',
        'Authored technical documentation for components, API integration patterns, and deployment processes to speed up onboarding and cross-team collaboration.',
        'Conducted usability testing and translated user feedback into design improvements that lifted satisfaction scores.',
      ],
    },
  ],
  education: [
    {
      school: 'University of Nueva Caceres',
      degree: 'Bachelor of Science in Information Technology',
      date: 'June 2021',
    },
  ],
  certifications: [
    { name: 'AWS Cloud Quest: Generative AI Practitioner Training', year: 2026 },
    { name: 'AWS Cloud Practitioner', year: 2025 },
    { name: 'Scrum Foundation', year: 2022 },
  ],
  leadership:
    'Served as a leader for the Hybrid Mobile App — providing knowledge transition, technical guidance, and hands-on training to ensure smooth onboarding and consistent delivery.',
  projects: [
    {
      title: 'Always Safe App',
      subtitle: 'Accenture · Mobile Operations',
      summary:
        'Internal Accenture mobile app where I handled modernization, release support, and production readiness. Led framework upgrades across major Angular/Ionic/Capacitor versions, refactored deprecated patterns, and supported stage/prod testing — including push-notification behavior across iOS and Android — while keeping the app compliant through ongoing security-scan remediation.',
      tags: ['Angular', 'Ionic', 'Capacitor', 'iOS', 'Android', 'Mobile Ops'],
      accent: 'violet',
      context: 'work',
      initial: 'A',
    },
    {
      title: 'Mobile App Release & Deployment Automation',
      subtitle: 'Accenture · DevOps Enablement',
      summary:
        'Built and documented an internal deployment approach for distributing mobile builds through Azure Pipelines and Firebase App Distribution. Standardized pipeline steps and distribution checks — upload, verification, and tester workflow — to make releases repeatable for the Mobile Operations team.',
      tags: ['Azure Pipelines', 'Firebase App Distribution', 'DevOps', 'CI/CD'],
      accent: 'blue',
      context: 'work',
      initial: 'M',
    },
    {
      title: 'Pet Manager 2000',
      subtitle: 'Personal Project',
      summary:
        'A pet store queue management web app built with Angular and Tailwind CSS. Staff manage a kanban-style board to track pets through the queue, while a separate customer-facing display keeps owners informed in real time.',
      tags: ['Angular', 'Tailwind CSS', 'Kanban', 'Realtime'],
      liveUrl: 'https://doug-26.github.io/Pet-Manager-2000/',
      accent: 'pink',
      context: 'personal',
      initial: 'P',
    },
    {
      title: 'EventSync',
      subtitle: 'Personal Project',
      summary:
        'A full-stack event management platform where organizers create events, generate shareable invite links, and collect RSVPs from guests — no sign-up required for invitees.',
      tags: ['Full-Stack', 'Events', 'RSVP', 'Shareable Links'],
      repoUrl: 'https://github.com/Doug-26/EventSync',
      accent: 'orange',
      context: 'personal',
      initial: 'E',
    },
    {
      title: 'Klima',
      subtitle: 'Personal Project',
      summary:
        'A mobile-responsive Angular weather forecast app with a colorful sunset-themed UI. Search any city in the world to instantly see temperature, humidity, wind speed, pressure, and more.',
      tags: ['Angular', 'Weather API', 'Responsive', 'Vercel'],
      liveUrl: 'https://weather-forecast-app-sigma-nine.vercel.app/',
      accent: 'red',
      context: 'personal',
      initial: 'K',
    },
  ],
};
