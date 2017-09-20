import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  menuItems: any; // todo from service

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Mobiilne kassino'
      },
      {
        name: 'Spordiennustus'
      },
      {
        name: 'Kasiinoboonused'
      }
    ];
  }

}
