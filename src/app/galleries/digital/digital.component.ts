import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { 
}

  ngOnInit() {this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: 'assets/img/gallery/digital/37.jpg',
          medium: 'assets/img/gallery/digital/37.jpg',
          big: 'assets/img/gallery/digital/37.jpg'
      },
      {
          small: 'assets/img/gallery/digital/38.jpg',
          medium: 'assets/img/gallery/digital/38.jpg',
          big: 'assets/img/gallery/digital/38.jpg'
      },
      {
          small: 'assets/img/gallery/digital/40.jpg',
          medium: 'assets/img/gallery/digital/40.jpg',
          big: 'assets/img/gallery/digital/40.jpg'
      },
      {
        small: 'assets/img/gallery/digital/41.jpg',
        medium: 'assets/img/gallery/digital/41.jpg',
        big: 'assets/img/gallery/digital/41.jpg'
    },
    {
        small: 'assets/img/gallery/digital/42.jpg',
        medium: 'assets/img/gallery/digital/42.jpg',
        big: 'assets/img/gallery/digital/42.jpg'
    },
    {
        small: 'assets/img/gallery/digital/43.jpg',
        medium: 'assets/img/gallery/digital/43.jpg',
        big: 'assets/img/gallery/digital/43.jpg'
    },
    {
        small: 'assets/img/gallery/digital/44.jpg',
        medium: 'assets/img/gallery/digital/44.jpg',
        big: 'assets/img/gallery/digital/44.jpg'
    },
    {
        small: 'assets/img/gallery/digital/45.jpg',
        medium: 'assets/img/gallery/digital/45.jpg',
        big: 'assets/img/gallery/digital/45.jpg'
    },
    {
        small: 'assets/img/gallery/digital/46.jpg',
        medium: 'assets/img/gallery/digital/46.jpg',
        big: 'assets/img/gallery/digital/46.jpg'
    },
    {
        small: 'assets/img/gallery/digital/47.jpg',
        medium: 'assets/img/gallery/digital/47.jpg',
        big: 'assets/img/gallery/digital/47.jpg'
    },
    {
        small: 'assets/img/gallery/digital/48.jpg',
        medium: 'assets/img/gallery/digital/48.jpg',
        big: 'assets/img/gallery/digital/48.jpg'
    },
    {
        small: 'assets/img/gallery/digital/49.jpg',
        medium: 'assets/img/gallery/digital/49.jpg',
        big: 'assets/img/gallery/digital/49.jpg'
    },
    {
        small: 'assets/img/gallery/digital/50.jpg',
        medium: 'assets/img/gallery/digital/50.jpg',
        big: 'assets/img/gallery/digital/50.jpg'
    },
    {
        small: 'assets/img/gallery/digital/51.jpg',
        medium: 'assets/img/gallery/digital/51.jpg',
        big: 'assets/img/gallery/digital/51.jpg'
    },
    {
        small: 'assets/img/gallery/digital/52.jpg',
        medium: 'assets/img/gallery/digital/52.jpg',
        big: 'assets/img/gallery/digital/52.jpg'
    },
    {
        small: 'assets/img/gallery/digital/53.jpg',
        medium: 'assets/img/gallery/digital/53.jpg',
        big: 'assets/img/gallery/digital/53.jpg'
    },
    {
        small: 'assets/img/gallery/digital/54.jpg',
        medium: 'assets/img/gallery/digital/54.jpg',
        big: 'assets/img/gallery/digital/54.jpg'
    },
    {
        small: 'assets/img/gallery/digital/55.jpg',
        medium: 'assets/img/gallery/digital/55.jpg',
        big: 'assets/img/gallery/digital/55.jpg'
    },
    {
        small: 'assets/img/gallery/digital/56.jpg',
        medium: 'assets/img/gallery/digital/56.jpg',
        big: 'assets/img/gallery/digital/56.jpg'
    },
    {
        small: 'assets/img/gallery/digital/57.jpg',
        medium: 'assets/img/gallery/digital/57.jpg',
        big: 'assets/img/gallery/digital/57.jpg'
    },
    {
        small: 'assets/img/gallery/digital/58.jpg',
        medium: 'assets/img/gallery/digital/58.jpg',
        big: 'assets/img/gallery/digital/58.jpg'
    },
    {
        small: 'assets/img/gallery/digital/59.jpg',
        medium: 'assets/img/gallery/digital/59.jpg',
        big: 'assets/img/gallery/digital/59.jpg'
    },
    {
        small: 'assets/img/gallery/digital/60.jpg',
        medium: 'assets/img/gallery/digital/60.jpg',
        big: 'assets/img/gallery/digital/60.jpg'
    },
    {
        small: 'assets/img/gallery/digital/61.jpg',
        medium: 'assets/img/gallery/digital/61.jpg',
        big: 'assets/img/gallery/digital/61.jpg'
    },
       
  ];
}
}
