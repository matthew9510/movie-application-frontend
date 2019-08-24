import { Component, OnInit } from '@angular/core';
import { UserService, LoginResponse, userCredentials} from'../user.service'
import { AppInfoService } from '../app-info.service'
import { Router } from '@angular/router'


interface Form {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _appInfoService: AppInfoService, public _userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  form: Form = {
    email: null,
    password: null,
    // confirmPassword: null
  };

  login(){
    this._userService.login(this.form).subscribe( (res: LoginResponse)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('loginResponseId', res.id);
      this.populateSessionStorage();
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/home'])
  }

  populateSessionStorage(){
    this._userService.getUserCred(sessionStorage.userId).subscribe((res: userCredentials) => {
      sessionStorage.setItem('userName', res.username);
      sessionStorage.setItem('email', res.email);
      sessionStorage.setItem('firstName', res.firstName);
      sessionStorage.setItem('lastName', res.lastName);
      sessionStorage.setItem('getAppUserId', res.id);
    })
  }


}
