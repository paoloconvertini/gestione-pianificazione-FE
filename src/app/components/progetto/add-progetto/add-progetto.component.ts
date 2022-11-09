import { Component, OnInit } from '@angular/core';
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Progetto} from "../../../models/progetto";
import {CommonAddComponent} from "../../commonAddComponent";

@Component({
  selector: 'app-add-progetto',
  templateUrl: './add-progetto.component.html',
  styleUrls: ['./add-progetto.component.css']
})
export class AddProgettoComponent extends CommonAddComponent<Progetto> implements OnInit {
  progetto: Progetto = {
    nome: '',
    descrizione: ''
  }
  constructor(service: ProgettoService, _snackBar: MatSnackBar) {
    super(service, _snackBar);
  }

  ngOnInit(): void {}

  override save(): void {
    super.save('Progetto salvato con successo!!', this.progetto);
  }

}
