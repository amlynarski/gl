import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/menu-item.model';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-left.component.sass']
})
export class NavMenuLeftComponent implements OnInit {
  menuItems: MenuItem[];
  selectedElement: MenuItem | null = null;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
    this.navigationService.getSelectedElement()
      .subscribe(
        selectedElement => this.selectedElement = selectedElement
      );
  }

  onElementSelect(element: MenuItem) {
    this.navigationService.selectElement(element);
  }

  closeNav() {
    this.navigationService.close();
  }

  private getMenuItems() {
    this.navigationService.getNavigationElements()
      .subscribe(
        response => this.menuItems = response.menu
      );
  }

}
