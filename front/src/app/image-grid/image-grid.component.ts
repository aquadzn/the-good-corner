import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {
  
  images! : Image[];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getHomepageImages();
  }

}
