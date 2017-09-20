import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/menu-item.model';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-left.component.sass']
})
export class NavMenuLeftComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  selectedElement: MenuItem | null = null;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.selectedElement = this.navigationService.getSelectedElement();
  }

  onElementSelect(element: MenuItem) {
    this.navigationService.selectElement(element);
    this.selectedElement = element;
  }

}
