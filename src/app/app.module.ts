import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { NavigationService } from './navigation/navigation.service';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu/nav-menu.component';
import { NavMenuSubComponent } from './navigation/nav-menu/nav-menu-sub/nav-menu-sub.component';
import { MenuItemComponent } from './navigation/nav-menu/nav-menu/menu-item/menu-item.component';
import { SubNavMenuItemComponent } from './navigation/nav-menu/nav-menu-sub/sub-nav-menu-item/sub-nav-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    NavMenuComponent,
    NavMenuSubComponent,
    MenuItemComponent,
    SubNavMenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
