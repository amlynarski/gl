import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu-item.model';

@Component({
  selector: 'app-nav-menu-left-sub',
  templateUrl: './nav-menu-sub.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-sub.component.sass']
})
export class NavMenuSubComponent implements OnInit {
  @Input() navElement: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
