import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private tokenKey = 'token';
  user:User = {};
  public loginForm!: FormGroup;
  constructor(private http: HttpClient, private service: AuthenticationService, private router: Router) {}

  public onSubmit() {
    this.service.login(this.user)
      .subscribe({
        next: (token) => {
          localStorage.setItem(this.tokenKey, token);
          this.router.navigate(['/riepilogo']);
        },
        error: (e) => console.error(e)
      });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

}
