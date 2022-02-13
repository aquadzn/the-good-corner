import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public getHomepageImages(): Image[] {
    var images: Image[] = [];

    this.http
      .get<any>('http://localhost:5000/images/homepage')
      .subscribe((data) => {
        for (let element of data) {
          images.push(
            new Image(
              element.photo_id,
              element.photographer_name,
              element.filename,
              element.photo_image_url,
              element.exif_camera_model,
              element.photo_width,
              element.photo_height,
              element.photo_aspect_ratio,
              element.photo_description,
              element.keyword,
              element.colors
            )
          );
        }
      });

    return images;
  }

  public getGalleryImages(offset: number = 0, limit: number = 6): Image[] {
    var images: Image[] = [];

    this.http
      .get<any>(
        `http://localhost:5000/images/gallery?offset=${offset}&limit=${limit}`
      )
      .subscribe((data) => {
        for (let element of data) {
          images.push(
            new Image(
              element.photo_id,
              element.photographer_name,
              element.filename,
              element.photo_image_url,
              element.exif_camera_model,
              element.photo_width,
              element.photo_height,
              element.photo_aspect_ratio,
              element.photo_description,
              element.keyword,
              element.colors
            )
          );
        }
      });

    return images;
  }

  public getImageById(id: string) {
    var img: Image = new Image('', '', '', '', '', NaN, NaN, NaN, '', '', '');

    this.http
      .get<any>(`http://localhost:5000/images/id/${id}`)
      .subscribe((data) => {
        img.photo_id = data.photo_id;
        img.photographer_name = data.photographer_name;
        img.filename = data.filename;
        img.photo_image_url = data.photo_image_url;
        img.exif_camera_model = data.exif_camera_model;
        img.photo_width = data.photo_width;
        img.photo_height = data.photo_height;
        img.photo_aspect_ratio = data.photo_aspect_ratio;
        img.photo_description = data.photo_description;
        img.keyword = data.keyword;
        img.colors = data.colors;
      });

    console.log(img);
    return img;
  }

  public getRandomImageSize(size: string | null) {
    var img: Image = new Image('', '', '', '', '', NaN, NaN, NaN, '', '', '');

    this.http
      .get<any>(`http://localhost:5000/images/random/${size}`)
      .subscribe((data) => {
        img.photo_id = data.photo_id;
        img.photo_image_url = data.photo_image_url;
      });

    return img;
  }

  public getRandomImageWidthHeight(
    width: string | null,
    height: string | null
  ) {
    var img: Image = new Image('', '', '', '', '', NaN, NaN, NaN, '', '', '');

    this.http
      .get<any>(`http://localhost:5000/images/random/${width}/${height}`)
      .subscribe((data) => {
        img.photo_id = data.photo_id;
        img.photo_image_url = data.photo_image_url;
      });

    return img;
  }

  public getImagesByKeyword(
    keyword: string | null,
    color: string,
    offset: number = 0,
    limit: number = 6
  ): Image[] {
    var images: Image[] = [];

    this.http
      .get<any>(
        `http://localhost:5000/images/search/${keyword}?offset=${offset}&limit=${limit}&color=${color}`
      )
      .subscribe((data) => {
        for (let element of data) {
          images.push(
            new Image(
              element.photo_id,
              element.photographer_name,
              element.filename,
              element.photo_image_url,
              element.exif_camera_model,
              element.photo_width,
              element.photo_height,
              element.photo_aspect_ratio,
              element.photo_description,
              element.keyword,
              element.colors
            )
          );
        }
      });

    return images;
  }

  public uploadImage(formData: FormData) {
    var payload = Object();
    formData.forEach((value: any, key: any) => {
      payload[key] = value;
    });

    return this.http.post<any>('http://localhost:5000/images/upload', payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
