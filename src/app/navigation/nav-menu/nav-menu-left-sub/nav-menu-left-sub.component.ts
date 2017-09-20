import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu-item.model';

@Component({
  selector: 'app-nav-menu-left-sub',
  templateUrl: './nav-menu-left-sub.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-left-sub.component.sass']
})
export class NavMenuLeftSubComponent implements OnInit {
  @Input() navElement: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
