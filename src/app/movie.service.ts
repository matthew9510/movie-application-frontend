import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUsersUrl: string = '/appUsers/'
  movieUrl: string;
  


  addToFavorites(movieTitle: string){
    this.movieUrl = `${this.baseUrl}${this.appUsersUrl}${sessionStorage.getItem("userId")}/favs/`
    return this._http.post(this.movieUrl, {"movieTitle":movieTitle})
  }

}
