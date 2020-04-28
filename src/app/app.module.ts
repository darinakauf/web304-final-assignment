import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent, 
    MoviesListComponent, 
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
