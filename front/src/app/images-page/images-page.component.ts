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
  offset: number = 0;
  limit: number = 6;
  page: number = 1;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // A CHANGER
    this.images = this.imageService.getGalleryImages();
  }

  showMore() {
    this.offset += 6;
    this.page += 1;

    this.images = this.imageService.getGalleryImages(this.offset, this.limit);
  }

  showLess() {
    this.offset -= 6;
    this.page -= 1;

    this.images = this.imageService.getGalleryImages(this.offset, this.limit);
  }
}
