import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageComponent } from './image/image.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiPageComponent } from './api/api-page/api-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ApiImageSizeComponent } from './api/api-image-size/api-image-size.component';
import { ApiImageWidthHeightComponent } from './api/api-image-width-height/api-image-width-height.component';
import { LoginFormDialogComponent } from './login-form-dialog/login-form-dialog.component';
import {AuthenticationServiceService} from "./authentication-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HeaderComponent,
    ImageGridComponent,
    ImageComponent,
    ImagesPageComponent,
    ImageModalComponent,
    ApiPageComponent,
    SearchResultsComponent,
    UploadPageComponent,
    ApiImageSizeComponent,
    ApiImageWidthHeightComponent,
    LoginFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
