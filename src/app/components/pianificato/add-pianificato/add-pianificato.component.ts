import { Component, OnInit } from '@angular/core';
import {CommonAddComponent} from "../../commonAddComponent";
import {Pianificato} from "../../../models/pianificato";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Dipendente} from "../../../models/dipendente";
import {Progetto} from "../../../models/progetto";

@Component({
  selector: 'app-add-pianificato',
  templateUrl: './add-pianificato.component.html',
  styleUrls: ['./add-pianificato.component.css']
})
export class AddPianificatoComponent extends CommonAddComponent<Pianificato> implements OnInit {


  constructor(service: PianificatoService, snackBar: MatSnackBar) {
    super(service, snackBar);
  }

  ngOnInit(): void {
  }

  override save(): void {
    super.save('Pianicazione salvata con successo!!', '');
  }
}
