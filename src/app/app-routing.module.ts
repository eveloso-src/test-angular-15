import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthServiceService } from './service/auth-service.service';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'films', component: HomeComponent,  canActivate: [AuthServiceService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
