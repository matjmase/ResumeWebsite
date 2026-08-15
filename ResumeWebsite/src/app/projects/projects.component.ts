import { Component, signal, viewChild } from '@angular/core';
import { ImageRevealComponent } from '../image-reveal/image-reveal.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-projects',
  imports: [ImageRevealComponent, CustomDialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly selectedImage = signal('');
  readonly projectImages = [
    '/Gradient.jpg',
    '/PathFound.jpg',
    '/mosaic.jpeg',
    '/NutritionDashboard.jpg',
    '/StockDataRead.jpg',
    '/StockDataUpload.jpg',
    '/StockDataUpload.jpg',
    '/StockSymbolAddRemove.jpg',
    '/StockSymbolRead.jpg',
    '/StrategyList.jpg',
  ];

  private readonly imageDialog = viewChild.required(CustomDialogComponent);

  openImage(imageSrc: string): void {
    this.selectedImage.set(imageSrc);
    this.imageDialog().open();
  }
}
