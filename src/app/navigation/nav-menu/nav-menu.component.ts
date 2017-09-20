import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MenuItem } from '../shared/menu-item.model';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass']
})
export class NavMenuComponent implements OnInit {
  menuItems: Observable<MenuItem[]>;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.navigationService.getNavigationElements()
      .subscribe(
        items => this.menuItems = items
      );
  }

}
