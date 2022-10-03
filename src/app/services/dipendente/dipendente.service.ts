import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Dipendente } from "../../models/dipendente";
import {environment} from "../../../environments/environment";
import {CommonService} from "../CommonSerivce";

const url = environment.baseUrl + environment.DIPENDENTI;
@Injectable({
  providedIn: 'root'
})
export class DipendenteService extends CommonService<Dipendente>{
  constructor(http: HttpClient) {
    super(http, url);
  }
}
