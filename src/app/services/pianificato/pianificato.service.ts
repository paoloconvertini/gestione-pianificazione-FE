import { Injectable } from '@angular/core';
import {CommonService} from "../CommonSerivce";
import {Pianificato} from "../../models/pianificato";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const url = environment.baseUrl + environment.PIANIFICATO;
@Injectable({
  providedIn: 'root'
})
export class PianificatoService extends CommonService<Pianificato>{

  constructor(http: HttpClient) {
    super(http, url);
  }

  getPianificatoByIdProgetto(id:any): Observable<any> {
    return this.http.get<any>(`${this.url}/all/${id}`);
  }
}
