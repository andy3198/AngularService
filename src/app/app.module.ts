import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FemaleComponent } from './app.female';
//import { MaleComponent} from './app.male';

import {MatTableModule} from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';




@NgModule({
  declarations: [
    AppComponent,
    //FemaleComponent,
    //MaleComponent
    routingComponents
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //FemaleComponent,
    //MaleComponent
  ]
})
export class AppModule { }
