import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';
import { NavigationService } from './navigation/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
