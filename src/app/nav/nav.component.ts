import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public _userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._userService.logout()
    .subscribe(() => {
      sessionStorage.clear();
      this._userService.isLoggedIn = false;
      this.router.navigate(['/login'])
    });
    
  }



}
