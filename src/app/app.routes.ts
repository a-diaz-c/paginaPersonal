import {RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'sobre_mi', component: SobremiComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);