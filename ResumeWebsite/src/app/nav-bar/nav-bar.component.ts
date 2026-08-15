import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private route = inject(ActivatedRoute);

  activeFragment: string | null = null;

  constructor() {
    this.route.fragment.subscribe((fragment) => {
      this.activeFragment = fragment;
    });
  }

  readonly navItems = [
    { label: 'Home', fragment: 'splash' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Resume', fragment: 'resume' },
    { label: 'About', fragment: 'about' },
    { label: 'Contact', fragment: 'contact' },
  ];
}
