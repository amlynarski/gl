import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';
import { NavigationService } from './navigation/navigation.service';
import { NavMenuLeftComponent } from './navigation/nav-menu/nav-menu-left/nav-menu-left.component';
import { NavMenuLeftSubComponent } from './navigation/nav-menu/nav-menu-left-sub/nav-menu-left-sub.component';
import { LeftNavMenuItemComponent } from './navigation/nav-menu/nav-menu-left/left-nav-menu-item/left-nav-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    NavMenuComponent,
    NavMenuLeftComponent,
    NavMenuLeftSubComponent,
    LeftNavMenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
