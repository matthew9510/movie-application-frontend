import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import {FavoritesComponent} from './favorites/favorites.component'
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
