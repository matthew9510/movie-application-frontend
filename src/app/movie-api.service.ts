import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

export  interface  Response{
  page:  number,
  results:  any,
  total_pages:  number,
  total_results:  number
 }

  export interface  ResponseResults{
    adult: Boolean,
    poster_path:  string,
    title:  string,
    id: number,
    overview: string,
    popularity: number,
    release_date: string,
  }

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(public _http: HttpClient) { }

  routes = {
    topRated: "movie/top_rated"
  }

  apiKey: string = "fe4cb6e135cf7a8e9c2447e1fe6978e9";
  
  baseUrl: string = "https://api.themoviedb.org/3/"
  endUrl: string = "?api_key=${this.apiKey}&language=en-US&page=1`;"
  
  // imageUrl = imageBaseUrl + posterSizes + poster_path;
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/'
  posterSizes: string[] =  [ "w92", "w154", "w185", "w342", "w500", "w780", "original" ]
  

  // topRatedUrl: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
  
  getMovies(route: string){
    return this._http.get(this.baseUrl + this.routes[route] + this.endUrl);
    
  }
}