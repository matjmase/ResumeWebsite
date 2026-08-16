import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResumeJobComponent } from '../resume-job/resume-job.component';

@Component({
  selector: 'app-resume',
  imports: [ResumeJobComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  private count = 0;

  private sql: ResumeTechnologyModel = {
    name: 'SQL Server',
    order: 0,
  };

  private cSharp: ResumeTechnologyModel = {
    name: 'C#',
    order: 1,
  };

  private golang: ResumeTechnologyModel = {
    name: 'Golang',
    order: 1,
  };

  private aspNet: ResumeTechnologyModel = {
    name: 'ASP.NET Core',
    order: 2,
  };

  private entityFramework: ResumeTechnologyModel = {
    name: 'Entity Framework',
    order: 3,
  };

  private angular: ResumeTechnologyModel = {
    name: 'Angular',
    order: 4,
  };

  private vue: ResumeTechnologyModel = {
    name: 'Vue',
    order: 4,
  };

  private typeScript: ResumeTechnologyModel = {
    name: 'TypeScript',
    order: 5,
  };

  private scss: ResumeTechnologyModel = {
    name: 'SCSS',
    order: 6,
  };

  private css: ResumeTechnologyModel = {
    name: 'CSS',
    order: 7,
  };

  private html: ResumeTechnologyModel = {
    name: 'HTML',
    order: 8,
  };

  private azure: ResumeTechnologyModel = {
    name: 'Azure',
    order: 9,
  };

  private gcp: ResumeTechnologyModel = {
    name: 'GCP',
    order: 9,
  };

  private docker: ResumeTechnologyModel = {
    name: 'Docker',
    order: 10,
  };

  private kubernetes: ResumeTechnologyModel = {
    name: 'Kubernetes',
    order: 11,
  };

  private azurePipelines: ResumeTechnologyModel = {
    name: 'Azure Pipelines',
    order: 12,
  };

  private maui: ResumeTechnologyModel = {
    name: 'MAUI',
    order: 13,
  };

  private wpf: ResumeTechnologyModel = {
    name: 'WPF',
    order: 14,
  };

  private unity: ResumeTechnologyModel = {
    name: 'Unity',
    order: 15,
  };

  private godot: ResumeTechnologyModel = {
    name: 'Godot',
    order: 16,
  };

  public jobs: ResumeJobModel[] = [
    {
      title: 'Software Engineer | Sanusom | Mar 2025 - May 2026',
      expanded: false,
      description: `Developed full stack healthcare platform solutions using Azure, C#, ASP.NET, Angular, and SQL Server.
 Partner with engineering leadership throughout the SDLC.
 Improved application and database performance for critical business processes.`,
      techStack: [
        this.sql,
        this.cSharp,
        this.aspNet,
        this.entityFramework,
        this.angular,
        this.typeScript,
        this.css,
        this.html,
        this.azure,
        this.azurePipelines,
        this.docker,
        this.kubernetes,
      ],
    },
    {
      title: 'Software Engineer | Tri-Imaging Solutions | Jul 2024 - Jan 2025',
      expanded: false,
      description: `Refactored Angular applications to eliminate duplicate code and improve maintainability.
 Migrated frontend testing from Jasmine/Karma to Jest and repaired ~200 unit tests.
 Integrated automated frontend testing into Azure DevOps pipelines.
 Standardized styling architecture through a company-wide SCSS overhaul.`,
      techStack: [
        this.sql,
        this.cSharp,
        this.aspNet,
        this.entityFramework,
        this.angular,
        this.typeScript,
        this.scss,
        this.html,
        this.azure,
        this.azurePipelines,
        this.docker,
      ],
    },

    {
      title:
        'Full Stack Software Engineer | Radiology Partners | Oct 2022 - Sep 2023',
      expanded: false,
      description: `Supported modernization of a radiology desktop platform using Angular and Electron.
 Maintained cloud infrastructure and Kubernetes-hosted healthcare services.
 Developed Kubernetes autoscaling solutions and supported healthcare integrations.
 Championed code formatting standards adopted across the department.`,
      techStack: [
        this.sql,
        this.cSharp,
        this.golang,
        this.aspNet,
        this.entityFramework,
        this.angular,
        this.vue,
        this.typeScript,
        this.scss,
        this.html,
        this.gcp,
        this.docker,
      ],
    },

    {
      title: 'Junior Software Engineer | L3Harris ForceX | May 2018 - Jul 2019',
      expanded: false,
      description: `Developed C# WPF software for a U.S. Department of Defense program.`,
      techStack: [this.sql, this.cSharp, this.entityFramework, this.wpf],
    },

    {
      title: 'Software Developer | RxIT | Aug 2014 - Aug 2015',
      expanded: false,
      description: `Built and maintained pharmaceutical automation software.
 Developed SOAP services and supported customer integrations.`,
      techStack: [
        this.sql,
        this.cSharp,
        this.aspNet,
        this.entityFramework,
        this.html,
        this.css,
        this.wpf,
      ],
    },
  ];

  readonly technologies: ResumeTechnologyModel[] = [
    ...new Map(
      this.jobs
        .flatMap((job) => job.techStack)
        .map((technology) => [technology.name, technology] as const),
    ).values(),
  ].sort(
    (first, second) =>
      first.order - second.order || first.name.localeCompare(second.name),
  );

  setJobExpanded(selectedIndex: number, expanded: boolean): void {
    this.jobs.forEach((job, index) => {
      job.expanded = expanded && index === selectedIndex;
    });
  }

  isTechnologyActive(technology: ResumeTechnologyModel): boolean {
    return this.jobs.some(
      (job) =>
        job.expanded &&
        job.techStack.some((jobTechnology) => jobTechnology.name === technology.name),
    );
  }
}

interface ResumeTechnologyModel {
  name: string;
  order: number;
}

interface ResumeJobModel {
  title: string;
  description: string;
  expanded: boolean;
  techStack: ResumeTechnologyModel[];
}
