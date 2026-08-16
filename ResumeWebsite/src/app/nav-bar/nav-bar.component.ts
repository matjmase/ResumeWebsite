import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VerticalStepperRelayService } from '../services/vertical-stepper-relay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit, OnDestroy {
  private stepper = inject(VerticalStepperRelayService);
  private route = inject(ActivatedRoute);

  public readonly activeFragment = signal<string>('home');

  private subscription: Subscription | undefined;

  constructor() {
    this.route.fragment.subscribe((fragment) => {
      this.activeFragment.set(fragment ?? '');
    });
  }
  ngOnInit(): void {
    this.subscription = this.stepper.GetStepperState().subscribe((val) => {
      this.activeFragment.set(val);
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  readonly navItems = [
    { label: 'Home', fragment: 'home' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Resume', fragment: 'resume' },
    { label: 'About', fragment: 'about' },
  ];
}
