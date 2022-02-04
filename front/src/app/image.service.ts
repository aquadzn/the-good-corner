import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: Image[];

  constructor(private http: HttpClient) {
    this.images = [];
    this.images.push(new Image('994a10fc139c', 'https://images.unsplash.com/photo-1643892632961-994a10fc139c'));
    this.images.push(new Image('70a427607bf9', 'https://images.unsplash.com/photo-1643779374659-70a427607bf9'));
    this.images.push(new Image('792a826644c6', 'https://images.unsplash.com/photo-1643979870390-792a826644c6'));
    this.images.push(new Image('c17a5ddf14f4', 'https://images.unsplash.com/photo-1643967377110-c17a5ddf14f4'));
    this.images.push(new Image('fdea11728d5b', 'https://images.unsplash.com/photo-1643979556679-fdea11728d5b'));
    this.images.push(new Image('144f35a8b620', 'https://images.unsplash.com/photo-1643985775659-144f35a8b620'));
  }

  public getHomepageImages(): Image[] {
    // this.http.get<any>('http://localhost:5000/random/9').subscribe((data) => {
    //   for (let element of data) {
    //     images.push(new Image(element.id, element.url));
    //   }
    // });

    return this.images;
  }

  public getImageById(id: string): Image {
    const img = this.images.find((img) => img.id === id);
    if (!img) {
      throw new Error('Image not found');
    } else {
      return img;
    }
  }
}
