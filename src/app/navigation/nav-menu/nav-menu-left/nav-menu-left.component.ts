import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu-item.model';

@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-left.component.sass']
})
export class NavMenuLeftComponent implements OnInit {
  @Input() menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
