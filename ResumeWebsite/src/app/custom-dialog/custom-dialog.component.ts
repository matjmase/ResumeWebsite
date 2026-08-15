import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  input,
  OnDestroy,
  Output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  imports: [],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDialogComponent implements OnDestroy {
  @Output() readonly dialogClosed = new EventEmitter<void>();

  readonly title = input('Dialog');
  readonly closing = signal(false);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  open(): void {
    const element = this.dialog().nativeElement;
    this.clearCloseTimer();
    this.closing.set(false);

    if (!element.open) {
      element.showModal();
    }
  }

  close(): void {
    const element = this.dialog().nativeElement;
    if (!element.open || this.closing()) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.close();
      return;
    }

    this.closing.set(true);
    this.closeTimer = setTimeout(() => element.close(), 180);
  }

  closeFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  closeFromEscape(event: Event): void {
    event.preventDefault();
    this.close();
  }

  onNativeClose(): void {
    this.clearCloseTimer();
    this.closing.set(false);
    this.dialogClosed.emit();
  }

  ngOnDestroy(): void {
    this.clearCloseTimer();
  }

  private clearCloseTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}
