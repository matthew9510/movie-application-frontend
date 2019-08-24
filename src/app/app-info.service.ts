import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  appName: string = "Movie Finder";
  
  constructor() { }
}
