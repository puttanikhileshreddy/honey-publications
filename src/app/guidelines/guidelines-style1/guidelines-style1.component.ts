import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guidelines-style1',
  templateUrl: './guidelines-style1.component.html',
  styleUrls: ['./guidelines-style1.component.scss']
})
export class GuidelinesStyle1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getLogo(): string {
    return "assets/guidel-top-background.png";
}
}
