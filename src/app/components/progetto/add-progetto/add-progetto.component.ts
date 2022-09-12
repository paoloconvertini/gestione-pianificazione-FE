import { Component, OnInit } from '@angular/core';
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Progetto} from "../../../models/progetto";

@Component({
  selector: 'app-add-progetto',
  templateUrl: './add-progetto.component.html',
  styleUrls: ['./add-progetto.component.css']
})
export class AddProgettoComponent implements OnInit {
  progetto: Progetto = {
    nome: ''
  }
  message: string = '';

  constructor(private service: ProgettoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.message = '';
  }

  saveProgetto(): void {
    const data = {
      nome: this.progetto.nome,
    };
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          if(res && !res.error) {
            this.openSnackBar();
          }
        },
        error: (e) => console.error(e)
      });
  }

  openSnackBar() {
    this._snackBar.open('Progetto salvato con successo!!', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    });
  }

}
