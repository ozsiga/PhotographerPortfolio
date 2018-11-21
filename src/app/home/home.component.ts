import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '1080px',
          height: '720px',
          thumbnailsPercent: 25,
          thumbnailsColumns: 6,
          thumbnailMargin: 5,
          imageAnimation: NgxGalleryAnimation.Slide,
          previewKeyboardNavigation: true,
          previewZoom: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          imageAutoPlay: true,
          imageAutoPlayPauseOnHover: true,
          previewAutoPlay: true,
          previewAutoPlayPauseOnHover: true,
          
      },
       // max-width 800
       {
           breakpoint: 800,
           width: '100%',
           height: '600px',
           imagePercent: 80,
           thumbnailsPercent: 20,
           thumbnailsMargin: 5,
           thumbnailMargin: 5,
           preview: false,
           previewSwipe: true
       },
       // max-width 400
       {
           breakpoint: 450,
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
