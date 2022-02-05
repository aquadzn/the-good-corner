import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent implements OnInit {
  image!: Image;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.image = this.imageService.getImageById(id);
  }

  shareImage() {
    console.log(window.location.href);
  }
}
