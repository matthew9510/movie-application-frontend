import { Component, OnInit } from '@angular/core';
import {MovieApiService, TopRatedResponse, TopRatedResponseResults} from '../movie-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _movieApiService: MovieApiService) { }

  ngOnInit() {
  }
  
  get sessionStorage() {
    return sessionStorage;
  }

  getTopMovies(){
      this._movieApiService.getTopRated().subscribe((res: TopRatedResponse) => {
        let results: any = res.results;
        let movie1: TopRatedResponseResults = results["0"]
        console.log('https://api.themoviedb.org/3/'+movie1.poster_path)
      })
  }

}
