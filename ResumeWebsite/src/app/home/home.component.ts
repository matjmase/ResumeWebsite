import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { CSharpComponent } from '../svgIcons/csharp/csharp.component';
import { DotNetComponent } from '../svgIcons/dot-net/dot-net.component';
import { SqlServerComponent } from '../svgIcons/sql-server/sql-server.component';
import { CosmosDbComponent } from '../svgIcons/cosmos-db/cosmos-db.component';
import { AzureComponent } from '../svgIcons/azure/azure.component';
import { AngularIconComponent } from '../svgIcons/angular-icon/angular-icon.component';
import { AngularMaterialIconComponent } from '../svgIcons/angular-material-icon/angular-material-icon.component';
import { TypeScriptComponent } from '../svgIcons/type-script/type-script.component';
import { AzureDevOpsComponent } from '../svgIcons/azure-dev-ops/azure-dev-ops.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ResumeComponent } from '../resume/resume.component';
import { AboutComponent } from '../about/about.component';
import { VerticalStepperRelayService } from '../services/vertical-stepper-relay.service';

@Component({
  selector: 'app-home',
  imports: [
    AzureComponent,
    CSharpComponent,
    DotNetComponent,
    SqlServerComponent,
    CosmosDbComponent,
    AngularIconComponent,
    TypeScriptComponent,
    AngularMaterialIconComponent,
    AzureDevOpsComponent,
    ProjectsComponent,
    ResumeComponent,
    AboutComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private stepper = inject(VerticalStepperRelayService);

  activeSection = signal('home');

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.stepper.SetStepperState(entry.target.id);
            this.activeSection.set(entry.target.id);
          }
        }
      },
      {
        threshold: 0.5,
      },
    );

    document
      .querySelectorAll('section[id]')
      .forEach((section) => this.observer!.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
