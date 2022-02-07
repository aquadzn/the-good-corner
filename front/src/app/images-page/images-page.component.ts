import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.css'],
})
export class ImagesPageComponent implements OnInit, OnDestroy {
  images!: Image[];
  offset: number = 0;
  limit: number = 6;

  constructor(private imageService: ImageService) {}
  ngOnDestroy(): void {
    this.offset = 0;
    this.limit = 6;
  }

  ngOnInit(): void {
    // A CHANGER
    this.images = this.imageService.getGalleryImages();
  }

  showMore() {
    this.offset += 6;
    this.limit += 6;
    console.log(this.offset);
    console.log(this.limit);

    this.imageService
      .getGalleryImages(this.offset, this.limit)
      .forEach((new_img) => {
        this.images.push(new_img);
      });
  }
}
