import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

export interface RegisterResponse{
  email: string,
  firstName: string,
  id: string,
  lastName: string,
  token: string,
  userId: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public _http: HttpClient) { }

  makeNewAccount(userInfo){
    return this._http.post('http://localhost:3000/api/appUsers/', userInfo);
  }
}
