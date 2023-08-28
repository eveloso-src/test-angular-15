import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isLogged(): boolean {
    // verify in localstorage
    return (localStorage.getItem('username') !== null)

  }

}
