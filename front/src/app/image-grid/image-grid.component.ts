import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-grid[images]',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent implements OnInit {
  @Input() images!: Image[];

  constructor() {}

  ngOnInit(): void {}
}
