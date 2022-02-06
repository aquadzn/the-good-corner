import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.css'],
})
export class ImagesPageComponent implements OnInit {
  images!: Image[];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // A CHANGER
    this.images = this.imageService.getHomepageImages();
  }
}
