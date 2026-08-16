import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'app-resume-job',
  imports: [],
  templateUrl: './resume-job.component.html',
  styleUrl: './resume-job.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeJobComponent {
  private static nextId = 0;

  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly expanded = model(false);
  readonly descriptionId = `resume-job-description-${ResumeJobComponent.nextId++}`;

  toggleJob(): void {
    this.expanded.update((expanded) => !expanded);
  }
}
