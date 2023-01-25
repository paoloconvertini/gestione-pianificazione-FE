import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestione-pianificazione-fe';

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService: AuthenticationService) {
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
