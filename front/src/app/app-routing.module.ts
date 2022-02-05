import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPageComponent } from './api-page/api-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'images', component: ImagesPageComponent },
  { path: 'images/:id', component: ImageModalComponent },
  { path: 'api', component: ApiPageComponent },
  { path: 'search/:keyword', component: SearchResultsComponent },
  { path: 'search/:keyword/:color', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
