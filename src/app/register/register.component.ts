import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../app-info.service'
import { UserService, RegisterResponse} from'../user.service'
import { Router } from '@angular/router'

interface Form {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  // confirmPassword: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public _appInfoService: AppInfoService, public _userService: UserService, public router: Router) {}
  
  ngOnInit() {
        // if logged in 
  }

  form: Form = {
    firstName: null,
    lastName: null,
    email: null,
    username: null,
    password: null,
    // confirmPassword: null
  };

  signUp(){
    // if(this.form.password !== this.form.confirmPassword){
    //   console.log("try again")
    // }
    // else{
    //   console.log(this.form.password)
    //   console.log(this.form.confirmPassword)
    // }
    this._userService.makeNewAccount(this.form).subscribe( (res: RegisterResponse)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('userName', res.username);
      sessionStorage.setItem('email', res.email);
      sessionStorage.setItem('firstName', res.firstName);
      sessionStorage.setItem('lastName', res.lastName);
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/home'])
  }

}
