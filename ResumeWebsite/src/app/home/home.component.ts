import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
