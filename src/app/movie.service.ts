import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
import { Movie } from './movie-api.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUsersUrl: string = '/appUsers/'
  favoriteMoviesUrl: string = `${this.baseUrl}${this.appUsersUrl}${sessionStorage.getItem("userId")}/favs/`;
  
  addToFavorites(movie: Movie){
    return this._http.post(this.favoriteMoviesUrl, {"movieTitle": movie.title, "movieId": movie.id}, {headers: this.createHeader()})
  }

  getFavorites(){
    return this._http.get(this.favoriteMoviesUrl, {headers: this.createHeader()})
  }

  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

}
