import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const url = environment.baseUrl + environment.RIEPILOGO;
@Injectable({
  providedIn: 'root'
})
export class RiepilogoService {

  constructor(private http: HttpClient) { }

  getRiepilogo(): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
}
