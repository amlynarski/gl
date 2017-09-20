import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/menu-item.model';
import { NavigationService } from '../../navigation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-left.component.sass']
})
export class NavMenuLeftComponent implements OnInit {
  menuItems: Observable<MenuItem[]>;
  selectedElement: MenuItem | null = null;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
    this.selectedElement = this.navigationService.getSelectedElement();
  }

  onElementSelect(element: MenuItem) {
    this.navigationService.selectElement(element);
    this.selectedElement = element;
  }

  private getMenuItems() {
    this.navigationService.getNavigationElements()
      .subscribe(
        items => this.menuItems = items
      );
  }

}
