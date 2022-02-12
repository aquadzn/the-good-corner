import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiImageSizeComponent } from './api/api-image-size/api-image-size.component';
import { ApiImageWidthHeightComponent } from './api/api-image-width-height/api-image-width-height.component';
import { ApiPageComponent } from './api/api-page/api-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'images', component: ImagesPageComponent },
  { path: 'images/:id', component: ImageModalComponent },
  { path: 'search/:keyword', component: SearchResultsComponent },
  { path: 'search/:keyword/:color', component: SearchResultsComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'api', component: ApiPageComponent },
  { path: 'api/random/:size', component: ApiImageSizeComponent },
  { path: 'api/random/:width/:height', component: ApiImageWidthHeightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
