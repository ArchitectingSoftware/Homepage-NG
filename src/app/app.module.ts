import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

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
    NgbModule,
    NgxPageScrollModule,
    GalleriaModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
