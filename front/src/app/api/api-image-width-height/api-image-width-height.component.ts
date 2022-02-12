import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/image.service';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-api-image-width-height',
  templateUrl: './api-image-width-height.component.html',
  styleUrls: ['./api-image-width-height.component.css'],
})
export class ApiImageWidthHeightComponent implements OnInit {
  image!: Image;
  width!: string | null;
  height!: string | null;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.width = params.get('width');
      this.height = params.get('height');
      this.image = this.imageService.getRandomImageWidthHeight(
        this.width,
        this.height
      );
    });
  }
}
