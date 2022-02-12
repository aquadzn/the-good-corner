import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/image.service';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-api-image-size',
  templateUrl: './api-image-size.component.html',
  styleUrls: ['./api-image-size.component.css'],
})
export class ApiImageSizeComponent implements OnInit {
  image!: Image;
  size!: string | null;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.size = params.get('size');
      this.image = this.imageService.getRandomImageSize(this.size);
    });
  }
}
