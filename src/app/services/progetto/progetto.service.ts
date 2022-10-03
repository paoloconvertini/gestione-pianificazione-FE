import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Progetto} from "../../models/progetto";
import {environment} from "../../../environments/environment";
import {CommonService} from "../CommonSerivce";
import {Observable} from "rxjs";

const url = environment.baseUrl + environment.PROGETTI;
@Injectable({
  providedIn: 'root'
})
export class ProgettoService extends CommonService<Progetto>{

  constructor(http: HttpClient) { super(http, url) }

  getAllProgetti(): Observable<Progetto[]> {
    return this.http.get<any>(this.url);
  }
}
