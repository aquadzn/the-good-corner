export class Image {
  constructor(
    public photo_id: string,
    public photographer_name: string,
    public filename: string,
    public photo_image_url: string,
    public exif_camera_model: string,
    public photo_width: number,
    public photo_height: number,
    public photo_aspect_ratio: number,
    public photo_description: string,
    public keyword: string,
    public colors: string
  ) {}
}
