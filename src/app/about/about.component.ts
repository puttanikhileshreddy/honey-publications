import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// port { Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  // @HostListener("document:scroll", [])
  // onWindowScroll() {
  //   console.log("You just scolled");
  // }
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    console.log(e.target['scrollingElement'].scrollTop)
  
    // Your Code Here
  
  }

}
