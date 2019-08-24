import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

export  interface  TopRatedResponse{
  page:  number,
  results:  any,
  total_pages:  number,
  total_results:  number
 }

  export interface  TopRatedResponseResults{
  poster_path:  string,
  title:  string,
  }

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(public _http: HttpClient) { }

  apiKey: string = "fe4cb6e135cf7a8e9c2447e1fe6978e9";
  topRatedUrl: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

  getTopRated(){
    return this._http.get(this.topRatedUrl);
 }

}
