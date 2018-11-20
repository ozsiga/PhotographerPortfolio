import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout } from 'ngx-gallery';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.scss']
})
export class AnalogComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { 
    
  }

  ngOnInit() {
    this.galleryOptions = [
       {
           width: '700px',
           height: '500px',
           thumbnailsPercent: 25,
           thumbnailsColumns: 6,
           thumbnailMargin: 5,
           imageAnimation: NgxGalleryAnimation.Slide,
           previewKeyboardNavigation: true,
           previewZoom: true,
           previewCloseOnClick: true,
           previewCloseOnEsc: true,
           
       },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 5,
            thumbnailMargin: 5
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
  ];

  this.galleryImages = [
      {
          small: 'assets/img/gallery/analog/1.jpg',
          medium: 'assets/img/gallery/analog/1.jpg',
          big: 'assets/img/gallery/analog/1.jpg'
      },
      {
          small: 'assets/img/gallery/analog/2.jpg',
          medium: 'assets/img/gallery/analog/2.jpg',
          big: 'assets/img/gallery/analog/2.jpg'
      },
      {
          small: 'assets/img/gallery/analog/3.jpg',
          medium: 'assets/img/gallery/analog/3.jpg',
          big: 'assets/img/gallery/analog/3.jpg'
      },
      {
        small: 'assets/img/gallery/analog/4.jpg',
        medium: 'assets/img/gallery/analog/4.jpg',
        big: 'assets/img/gallery/analog/4.jpg'
      },
      {
        small: 'assets/img/gallery/analog/5.jpg',
        medium: 'assets/img/gallery/analog/5.jpg',
        big: 'assets/img/gallery/analog/5.jpg'
      },
      {
        small: 'assets/img/gallery/analog/6.JPG',
        medium: 'assets/img/gallery/analog/6.JPG',
        big: 'assets/img/gallery/analog/6.JPG'
      },
      {
        small: 'assets/img/gallery/analog/7.JPG',
        medium: 'assets/img/gallery/analog/7.JPG',
        big: 'assets/img/gallery/analog/7.JPG'
      },
      {
        small: 'assets/img/gallery/analog/8.JPG',
        medium: 'assets/img/gallery/analog/8.JPG',
        big: 'assets/img/gallery/analog/8.JPG'
      },
      {
        small: 'assets/img/gallery/analog/9.jpg',
        medium: 'assets/img/gallery/analog/9.jpg',
        big: 'assets/img/gallery/analog/9.jpg'
      },
      {
        small: 'assets/img/gallery/analog/10.jpg',
        medium: 'assets/img/gallery/analog/10.jpg',
        big: 'assets/img/gallery/analog/10.jpg'
      },
      {
        small: 'assets/img/gallery/analog/11.jpg',
        medium: 'assets/img/gallery/analog/11.jpg',
        big: 'assets/img/gallery/analog/11.jpg'
      },
      {
        small: 'assets/img/gallery/analog/12.jpg',
        medium: 'assets/img/gallery/analog/12.jpg',
        big: 'assets/img/gallery/analog/12.jpg'
      },
      {
        small: 'assets/img/gallery/analog/13.jpg',
        medium: 'assets/img/gallery/analog/13.jpg',
        big: 'assets/img/gallery/analog/13.jpg'
      },
      {
        small: 'assets/img/gallery/analog/14.JPG',
        medium: 'assets/img/gallery/analog/14.JPG',
        big: 'assets/img/gallery/analog/14.JPG'
      },
      {
        small: 'assets/img/gallery/analog/15.jpg',
        medium: 'assets/img/gallery/analog/15.jpg',
        big: 'assets/img/gallery/analog/15.jpg'
      },
      {
        small: 'assets/img/gallery/analog/16.jpg',
        medium: 'assets/img/gallery/analog/16.jpg',
        big: 'assets/img/gallery/analog/16.jpg'
      },
      {
        small: 'assets/img/gallery/analog/17.jpg',
        medium: 'assets/img/gallery/analog/17.jpg',
        big: 'assets/img/gallery/analog/17.jpg'
      },
      {
        small: 'assets/img/gallery/analog/18.jpg',
        medium: 'assets/img/gallery/analog/18.jpg',
        big: 'assets/img/gallery/analog/18.jpg'
      },
      {
        small: 'assets/img/gallery/analog/19.jpg',
        medium: 'assets/img/gallery/analog/19.jpg',
        big: 'assets/img/gallery/analog/19.jpg'
      },
      {
        small: 'assets/img/gallery/analog/20.jpg',
        medium: 'assets/img/gallery/analog/20.jpg',
        big: 'assets/img/gallery/analog/20.jpg'
      },
      {
        small: 'assets/img/gallery/analog/21.jpg',
        medium: 'assets/img/gallery/analog/21.jpg',
        big: 'assets/img/gallery/analog/21.jpg'
      },
      {
        small: 'assets/img/gallery/analog/22.jpg',
        medium: 'assets/img/gallery/analog/22.jpg',
        big: 'assets/img/gallery/analog/22.jpg'
      },
      {
        small: 'assets/img/gallery/analog/23.jpg',
        medium: 'assets/img/gallery/analog/23.jpg',
        big: 'assets/img/gallery/analog/23.jpg'
      },
      {
        small: 'assets/img/gallery/analog/24.jpg',
        medium: 'assets/img/gallery/analog/24.jpg',
        big: 'assets/img/gallery/analog/24.jpg'
      },
      {
        small: 'assets/img/gallery/analog/25.jpg',
        medium: 'assets/img/gallery/analog/25.jpg',
        big: 'assets/img/gallery/analog/25.jpg'
      },
      {
        small: 'assets/img/gallery/analog/27.jpg',
        medium: 'assets/img/gallery/analog/27.jpg',
        big: 'assets/img/gallery/analog/27.jpg'
      },
      {
        small: 'assets/img/gallery/analog/28.jpg',
        medium: 'assets/img/gallery/analog/28.jpg',
        big: 'assets/img/gallery/analog/28.jpg'
      },
      {
        small: 'assets/img/gallery/analog/29.jpg',
        medium: 'assets/img/gallery/analog/29.jpg',
        big: 'assets/img/gallery/analog/29.jpg'
      },
      {
        small: 'assets/img/gallery/analog/30.jpg',
        medium: 'assets/img/gallery/analog/30.jpg',
        big: 'assets/img/gallery/analog/30.jpg'
      },
      {
        small: 'assets/img/gallery/analog/31.jpg',
        medium: 'assets/img/gallery/analog/31.jpg',
        big: 'assets/img/gallery/analog/31.jpg'
      },
      {
        small: 'assets/img/gallery/analog/32.jpg',
        medium: 'assets/img/gallery/analog/32.jpg',
        big: 'assets/img/gallery/analog/32.jpg'
      },
      {
        small: 'assets/img/gallery/analog/33.jpg',
        medium: 'assets/img/gallery/analog/33.jpg',
        big: 'assets/img/gallery/analog/33.jpg'
      },
    
    
  ];
}
}
