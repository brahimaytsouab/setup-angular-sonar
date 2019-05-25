import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.isAuth.asObservable();
  }
  constructor() { }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth.next(true);
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth.next(false);
  }
}
