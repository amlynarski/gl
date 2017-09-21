import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationService } from './navigation/navigation.service';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NavigationModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageComponent
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
