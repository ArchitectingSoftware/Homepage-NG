import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { BannerComponent } from './banner/banner.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationsComponent } from './publications/publications.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { PhotosComponent } from './photos/photos.component'

import {GalleriaModule} from 'primeng/galleria'
import {AccordionModule} from 'primeng/accordion';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TeachingComponent,
    PublicationsComponent,
    AboutComponent,
    NavigationComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule,
    NgxPageScrollModule,
    GalleriaModule,
    AccordionModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
