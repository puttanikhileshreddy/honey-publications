import { Component, OnInit,HostListener,Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare const window: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // constructor(@Inject(DOCUMENT) private document: Document) { }
   constructor(){}
  ngOnInit() {
  }

// @HostListener('window:scroll', [])
// onWindowScroll() {
//   console.log('Detected');
  
//   if (document.body.scrollTop > 20 ||     
//   document.documentElement.scrollTop > 20) {
//     document.getElementById('navbar').classList.add('bgnav');
//     document.getElementById('paragraph').classList.add('bgnav');
//   }
// }

// @HostListener('window:scroll', [])
// onWindowScroll() {
//   if (document.body.scrollTop > 20 ||     
//   document.documentElement.scrollTop > 20) {
//     document.getElementById('subTitle').classList.add('red');
//     document.getElementById('paragraph').classList.add('green');
//   }
// }
// @HostListener("document:scroll", [])
//   onWindowScroll() {
//     console.log("You just scolled");
//   }
@HostListener('window:scroll', ['$event']) onWindowScroll(e) {
  console.log(e.target['scrollingElement'].scrollTop)

}

}
