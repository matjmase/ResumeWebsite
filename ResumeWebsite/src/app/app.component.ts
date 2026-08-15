import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NebulaParallaxComponent } from './nebula-parallax/nebula-parallax.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, NebulaParallaxComponent, RouterOutlet],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ResumeWebsite';
}
