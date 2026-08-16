import { Component, signal, viewChild } from "@angular/core";
import { ImageRevealComponent } from "../image-reveal/image-reveal.component";
import { CustomDialogComponent } from "../custom-dialog/custom-dialog.component";

@Component({
  selector: "app-projects",
  imports: [ImageRevealComponent, CustomDialogComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  readonly selectedImage = signal("");
  readonly projects: ThumbnailPic[] = [
    {
      title: "A* Path Finding Algorithm Visualizer",
      image: "PathFound.jpg",
      description:
        "The user can visualize the gradient being built and the traversal back.",
      imageAlt: "A path is formulated solving the maze.",
    },
    {
      title: "Photo Mosaic generating application",
      image: "mosaic.jpeg",
      description:
        "WPF application that can build images with smaller images. (It does all the interpolation or resizing.)",
      imageAlt: "An Image that is composed of many smaller images.",
    },
    {
      title: "Micro Nutritionist application",
      image: "NutritionDashboard.jpg",
      description:
        "MAUI application that allows the user to keep track of virtually every nutritional substance.",
      imageAlt:
        "Gauges that show a person's persuit of getting their daily value",
    },
  ];

  private readonly imageDialog = viewChild.required(CustomDialogComponent);

  openImage(imageSrc: string): void {
    this.selectedImage.set(imageSrc);
    this.imageDialog().open();
  }
}

interface ThumbnailPic {
  title: string;
  image: string;
  description: string;
  imageAlt: string;
}
