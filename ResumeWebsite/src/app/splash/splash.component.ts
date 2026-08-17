import { Component } from '@angular/core';
import { AngularIconComponent } from '../svgIcons/angular-icon/angular-icon.component';
import { AngularMaterialIconComponent } from '../svgIcons/angular-material-icon/angular-material-icon.component';
import { AzureDevOpsComponent } from '../svgIcons/azure-dev-ops/azure-dev-ops.component';
import { AzureComponent } from '../svgIcons/azure/azure.component';
import { CosmosDbComponent } from '../svgIcons/cosmos-db/cosmos-db.component';
import { CSharpComponent } from '../svgIcons/csharp/csharp.component';
import { DotNetComponent } from '../svgIcons/dot-net/dot-net.component';
import { SqlServerComponent } from '../svgIcons/sql-server/sql-server.component';
import { TypeScriptComponent } from '../svgIcons/type-script/type-script.component';

@Component({
  selector: 'app-splash',
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
  ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss',
})
export class SplashComponent {}
