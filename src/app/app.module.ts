import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobremiComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
