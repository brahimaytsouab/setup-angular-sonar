import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable, Subscription, interval} from "rxjs";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  secondes : number;
  counterSubscription: Subscription;

  // isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      // if(this.isLoggedIn) {
      //   const counter = interval(1000);
      //   counter.subscribe(
      //     (value) => {
      //       console.log('booom');
      //       this.secondes = value;
      //     }
      //   )
      // }
    })

    console.log(">>> this.isLoggedIn$ : ", this.isLoggedIn);
  }

  ngOnDestroy(): void {
  }

  onLogout() {
    this.authService.signOut();
  }



}
