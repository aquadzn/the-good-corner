import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public getHomepageImages(): Image[] {
    let images: Image[] = [];

    // this.http.get<any>('http://localhost:5000/random/9').subscribe((data) => {
    //   for (let element of data) {
    //     images.push(new Image(element.id, element.url));
    //   }
    // });

    images.push(new Image('1', 'https://picsum.photos/1280/720'));
    images.push(new Image('2', 'https://picsum.photos/500/1000'));
    images.push(new Image('3', 'https://picsum.photos/400'));
    images.push(new Image('4', 'https://picsum.photos/700/200'));
    images.push(new Image('5', 'https://picsum.photos/600'));
    images.push(new Image('6', 'https://picsum.photos/1000/500'));
    images.push(new Image('7', 'https://picsum.photos/300'));
    images.push(new Image('8', 'https://picsum.photos/1280/720'));
    images.push(new Image('9', 'https://picsum.photos/200/700'));

    return images;
  }
}
