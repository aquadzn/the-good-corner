import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css'],
})
export class UploadPageComponent implements OnInit {
  formUpload = new FormGroup({
    photographer_name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    photo_description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    keyword: new FormControl(''),
    exif_camera_model: new FormControl(''),
    colors: new FormControl(''),
    file: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private imageService: ImageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.formUpload.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formUpload.patchValue({
          file: reader.result,
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  submit() {
    if (this.formUpload.invalid) {
      return;
    }

    var formData = new FormData();
    formData.append(
      'photographer_name',
      this.formUpload.controls['photographer_name'].value
    );
    formData.append(
      'photo_description',
      this.formUpload.controls['photo_description'].value
    );
    formData.append('keyword', this.formUpload.controls['keyword'].value);
    formData.append(
      'exif_camera_model',
      this.formUpload.controls['exif_camera_model'].value
    );
    formData.append('colors', this.formUpload.controls['colors'].value);
    formData.append('file', this.formUpload.controls['file'].value);

    this.imageService.uploadImage(formData).subscribe({
      next: (data) => {
        this.router.navigateByUrl(`/images/${data['public_id']}`);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
