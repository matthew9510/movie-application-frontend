import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Movie } from './movie-api.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUsersUrl: string = '/appUsers/'

  
  addToFavorites(movie: Movie){
    let movieUrl: string = `${this.baseUrl}${this.appUsersUrl}${sessionStorage.getItem("userId")}/favs/`
    return this._http.post(movieUrl, {"movieTitle":movie.title, "movieId": movie.id})
  }

  getFavorites(){
    let movieUrl: string =  `${this.baseUrl}${this.appUsersUrl}${sessionStorage.getItem("userId")}/favs/`
    return this._http.get(movieUrl)
  }

}
