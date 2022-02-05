import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  colors: any = {};
  keyword!: string | null;

  constructor(private route: ActivatedRoute) {
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
    });
  }
}
