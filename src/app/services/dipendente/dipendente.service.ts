import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Dipendente } from "../../models/dipendente";
import {environment} from "../../../environments/environment";

const url = environment.baseUrl + environment.DIPENDENTI;
@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(url);
  }
  get(id: any): Observable<Dipendente> {
    return this.http.get<Dipendente>(`${url}/${id}`);
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
