import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private tokenKey = 'token';
  private expiresAt = 'expires_at';
  user:User = {};
  public form!: FormGroup;
  constructor(private fb:FormBuilder, private http: HttpClient,
              private service: AuthenticationService, private router: Router) {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  public onSubmit() {
    const val = this.form.value;
    if (val.username && val.password) {
      this.user.username = val.username;
      this.user.password = val.password;
      this.service.login(this.user)
        .subscribe({
          next: (res) => {
            if(res.error) {
              console.error(res.error);
              return;
            }
            this.setSession(res);
            this.router.navigate(['/riepilogo']);
          },
          error: (e) => console.error(e)
        });
    }
  }

  private setSession(authResult: { expiresIn: moment.DurationInputArg1; idToken: string; }) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem(this.tokenKey, authResult.idToken);
    localStorage.setItem(this.expiresAt, JSON.stringify(expiresAt.valueOf()) );
  }

}
