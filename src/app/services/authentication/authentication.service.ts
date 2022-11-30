import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import * as moment from "moment";

const url = environment.baseAuthUrl + environment.LOGIN;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'token';
  private expiresAt = 'expires_at';
  constructor(private http: HttpClient, private router: Router) { }

  login(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expiresAt);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    if(this.getExpiration() == null) {
      return false;
    }
    const isBefore = moment().isBefore(this.getExpiration());
    let token = localStorage.getItem(this.tokenKey);
    return !isBefore && token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  getExpiration() {
    const expiration = localStorage.getItem(this.expiresAt);
    if(expiration == null) {
      return null;
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
