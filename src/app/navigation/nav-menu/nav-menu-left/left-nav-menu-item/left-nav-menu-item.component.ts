import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../shared/menu-item.model';
import { NavigationService } from '../../../navigation.service';

@Component({
  selector: 'app-left-nav-menu-item',
  templateUrl: './left-nav-menu-item.component.html',
  styleUrls: ['./left-nav-menu-item.component.sass']
})
export class LeftNavMenuItemComponent implements OnInit {
  @Input() element: MenuItem;
  @Input() isSelected: boolean;
  @Output() selected = new EventEmitter<MenuItem>();
  iconClassName: string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getElementIconClass();
  }

  selectElement() {
    this.selected.emit(this.element);
  }

  getElementIconClass() {
    this.iconClassName = this.navigationService.getElementIconClass(this.element.icon);
  }

}
