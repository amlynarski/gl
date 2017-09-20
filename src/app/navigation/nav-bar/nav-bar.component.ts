import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Observable } from 'rxjs/Observable';

import { MenuItem } from '../shared/menu-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  menuItems: Observable<MenuItem[]>;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuItems = this.navigationService.getNavigationElements();
  }

}
