import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/photos/Ben1.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben2.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben3.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben4.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben5.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben6.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben7.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben8.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben10.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben11.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben12.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben13.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Ben14.JPG', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank0.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank1.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank2.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank3.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank4.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank5.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank6.jpg', alt: 'Ben Coding', title:'Ben Coding'});
    this.images.push({source: 'assets/photos/Tank7.jpg', alt: 'Ben Coding', title:'Ben Coding'}); 
  }

  

}
