import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResumeJobComponent } from '../resume-job/resume-job.component';

@Component({
  selector: 'app-resume',
  imports: [ResumeJobComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {}
