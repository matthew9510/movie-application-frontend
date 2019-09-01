import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { LoggedInAuthGuard } from './logged-in-auth.guard'
import { NotLoggedInAuthGuard } from './not-logged-in-auth.guard'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', canActivate: [LoggedInAuthGuard ], component: HomeComponent},
  {path:'register', canActivate: [NotLoggedInAuthGuard], component: RegisterComponent},
  {path:'login', canActivate: [NotLoggedInAuthGuard], component: LoginComponent},
  {path:'favorites', canActivate: [LoggedInAuthGuard], component:FavoritesComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
