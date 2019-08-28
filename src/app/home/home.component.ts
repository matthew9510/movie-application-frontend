import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _movieApiService: MovieApiService) { }

  imgSrc : string;

  ngOnInit() {
  }
  
  get sessionStorage() {
    return sessionStorage;
  }

}
