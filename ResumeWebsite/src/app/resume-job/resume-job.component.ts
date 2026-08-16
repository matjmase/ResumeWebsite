import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-resume-job',
  imports: [],
  templateUrl: './resume-job.component.html',
  styleUrl: './resume-job.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeJobComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly jobExpanded = signal(false);

  toggleJob(): void {
    this.jobExpanded.update((expanded) => !expanded);
  }
}
