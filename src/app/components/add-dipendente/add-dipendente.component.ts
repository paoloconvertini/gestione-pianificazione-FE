import {Component, OnInit} from '@angular/core';
import {Dipendente} from "../../models/dipendente";
import {DipendenteService} from "../../services/dipendente.service";

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
  submitted: boolean = false;

  constructor(private service: DipendenteService) {
  }

  ngOnInit(): void {
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
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDipendente(): void {
    this.submitted = false;
    this.dipendente = {
      nome: '',
      cognome: ''
    };
  }

}
