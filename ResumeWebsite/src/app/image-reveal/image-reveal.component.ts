import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-image-reveal',
  imports: [],
  templateUrl: './image-reveal.component.html',
  styleUrl: './image-reveal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageRevealComponent {
  @Output() readonly fileNameSelected = new EventEmitter<string>();

  readonly imageSrc = input('/Matt.jpg');
  readonly imageAlt = input('Project preview');
  readonly title = input('Featured Project');
  readonly description = input('Explore the project');

  emitFileName(): void {
    // const path = this.imageSrc().split(/[?#]/, 1)[0];
    // const encodedFileName = path.split(/[\\/]/).filter(Boolean).pop() ?? '';

    try {
      this.fileNameSelected.emit(this.imageSrc());
    } catch {
      this.fileNameSelected.emit('');
    }
  }

  onSpaceKey(event: Event): void {
    event.preventDefault();
    this.emitFileName();
  }
}
