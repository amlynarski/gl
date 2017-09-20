import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  menuItems: Observable<any[]>; // todo type

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuItems = this.navigationService.getNavigationElements();
  }

}
