import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  colors: any = {};
  keyword!: string | null;
  color!: string | null;
  images!: Image[];

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.colors['Blanc'] = 'white';
    this.colors['Bleu'] = 'blue';
    this.colors['Fuchsia'] = 'fuchsia';
    this.colors['Gris'] = 'gray';
    this.colors['Jaune'] = 'yellow';
    this.colors['Noir'] = 'black';
    this.colors['Orange'] = 'orange';
    this.colors['Rose'] = 'pink';
    this.colors['Rouge'] = 'red';
    this.colors['Vert'] = 'green';
    this.colors['Violet'] = 'purple';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.keyword = params.get('keyword');
      this.color = params.get('color') ?? '';
      this.images = this.imageService.getImagesByKeyword(
        this.keyword,
        this.color
      );
    });
  }
}
