import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images!: Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getHomepageImages();
  }

}
