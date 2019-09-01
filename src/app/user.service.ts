import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  }  from '@angular/common/http';


export interface RegisterResponse{
  email: string,
  firstName: string,
  id: string,
  lastName: string,
  token: string,
  userId: string,
  username: string
}

export interface LoginResponse{
  id: string,
  token: string,
  userId: string
}

export interface userCredentials{
  email: string,
  firstName: string,
  id: string,
  lastName: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login"
  logoutUrl: string = "appUsers/logout"
  isLoggedIn: boolean = false;

  makeNewAccount(credentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, credentials);
  }

  login(credentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, credentials);

  }

  logout(){
    return this._http.post(`${this.baseUrl}${this.logoutUrl}`, sessionStorage.getItem('token'), {headers: this.createHeader()})
  }

  getUserCred(userId: string){
    
    return this._http.get(`${this.baseUrl}${this.appUserUrl}${userId}`, {headers: this.createHeader()});
  }

  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

}
