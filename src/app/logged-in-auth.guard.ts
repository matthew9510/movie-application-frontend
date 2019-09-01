import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


/**
 * Grants access for navigating to pages if a user is logged in 
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {

  constructor(private routes : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(sessionStorage.getItem('token') !== null){
        return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
}
