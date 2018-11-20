import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home.component';
import { Angular2ImageGalleryModule } from "angular2-image-gallery"; 
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { CategoryComponent } from './home/category/category.component';
import { ContactComponent } from './contact/contact.component';
import { GalleriesComponent } from './galleries/galleries.component';
import 'hammerjs';
import { AnalogComponent } from './galleries/analog/analog.component';
import { DigitalComponent } from './galleries/digital/digital.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxGalleryModule } from 'ngx-gallery'
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CategoryComponent,
    ContactComponent,
    GalleriesComponent,
    AnalogComponent,
    DigitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    FormsModule,
    Ng2CarouselamosModule,
    NgxGalleryModule,
    AngularFontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
