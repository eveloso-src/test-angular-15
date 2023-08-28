import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  getAuthorizationToken() {
    return "mock-token"
  }
  constructor(private loginService: LoginServiceService, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      setInterval(() => observer.next(username === 'test'), 100);
    });
  }

  canActivate() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(["/"]);
      return false;
    }

    return true;
  }

}