import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Dipendente } from "../models/dipendente";

const baseUrl = 'http://localhost:8080/api/v1/dipendenti'
@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(baseUrl);
  }
  get(id: any): Observable<Dipendente> {
    return this.http.get<Dipendente>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    console.log("create body:" + JSON.stringify(data));
    return this.http.post(baseUrl, data);
  }
  update(id:any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
 /* deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
    findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }*/
}
