import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  invalidCredentialMsg = 'Invalid credentials';
  username: string = "user";
  password: string = "pass";
  retUrl: string = "home";
  subscription: Subscription | undefined

  constructor(private authService: AuthServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

  onFormSubmit(loginForm: any) {

    console.log(loginForm.username.value)
    console.log(loginForm.password.value)

    this.subscription = this.authService.login(loginForm.username.value, loginForm.password.value).subscribe(data => {
      if (data) {
        localStorage.setItem("username", loginForm.username.value)
        this.router.navigate(['/']);
      }
    });

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
