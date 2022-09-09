import {Component, OnInit} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-dipendente',
  templateUrl: './add-dipendente.component.html',
  styleUrls: ['./add-dipendente.component.css']
})
export class AddDipendenteComponent implements OnInit {
  dipendente: Dipendente = {
    nome: '',
    cognome: ''
  }
  message: string = '';

  constructor(private service: DipendenteService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.message = '';
  }

  saveDipendente(): void {
    const data = {
      nome: this.dipendente.nome,
      cognome: this.dipendente.cognome
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
       this._snackBar.open('Dipendente salvato con successo!!', '', {
         horizontalPosition: 'center',
         verticalPosition: 'top',
         duration: 2000
       });
  }
}
