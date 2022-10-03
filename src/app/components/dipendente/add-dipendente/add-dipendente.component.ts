import {Component, OnInit} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommonAddComponent} from "../../commonAddComponent";

@Component({
  selector: 'app-add-dipendente',
  templateUrl: './add-dipendente.component.html',
  styleUrls: ['./add-dipendente.component.css']
})
export class AddDipendenteComponent extends CommonAddComponent<Dipendente> implements OnInit {
  dipendente: Dipendente = {
    nome: '',
    cognome: ''
  }

  constructor(service: DipendenteService, _snackBar: MatSnackBar) {
    super(service, _snackBar);
  }

  ngOnInit(): void {
  }

  override save(): void {
    super.save('Dipendente salvato con successo!!', this.dipendente);
  }
}
