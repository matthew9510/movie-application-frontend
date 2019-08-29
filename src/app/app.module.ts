import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component'
import { LoginComponent } from './login/login.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { AppInfoService } from './app-info.service'
import { UserService } from'./user.service';
import { MovieService } from './movie.service' 

import { MovieApiService } from './movie-api.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    MoviesContainerComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [AppInfoService, UserService, MovieService, MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
