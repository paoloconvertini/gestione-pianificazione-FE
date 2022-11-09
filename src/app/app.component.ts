import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestione-pianificazione-fe';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService) {
  }

  onLogout(){
    this.isLoggedIn = false;
    this.authService.logout();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // {2}
  }
}
