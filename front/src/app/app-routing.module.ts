import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPageComponent } from './api-page/api-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ImagesPageComponent } from './images-page/images-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'images', component: ImagesPageComponent },
  { path: 'images/:id', component: ImageModalComponent },
  { path: 'api', component: ApiPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
