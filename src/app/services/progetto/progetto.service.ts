import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Progetto} from "../../models/progetto";
import {environment} from "../../../environments/environment";

const url = environment.baseUrl + environment.PROGETTI;
@Injectable({
  providedIn: 'root'
})
export class ProgettoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(url);
  }
  get(id: any): Observable<Progetto> {
    return this.http.get<Progetto>(`${url}/${id}`);
  }
  create(data: any): Observable<any> {
    console.log("create body:" + JSON.stringify(data));
    return this.http.post(url, data);
  }
  update(id:any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
