import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component'

import { AppInfoService } from './app-info.service'
import { UserService } from'./user.service';
import { MovieApiService } from './movie-api.service'
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    LoginComponent,
    CarouselComponent,
    MoviesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    MatCardModule
  ],
  providers: [AppInfoService, UserService, MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
