import { AngularMaterialModule } from './shared/module/angular-material/angular-material.module';
import { PeopleService } from './services/people.service';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
