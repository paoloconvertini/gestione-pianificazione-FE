import {Component, Input, OnInit} from '@angular/core';
import {Dipendente} from "../../models/dipendente";
import { ActivatedRoute } from '@angular/router';
import {DipendenteService} from "../../services/dipendente.service";

@Component({
  selector: 'app-edit-dipendente',
  templateUrl: './edit-dipendente.component.html',
  styleUrls: ['./edit-dipendente.component.css']
})
export class EditDipendenteComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentDipendente: Dipendente = {
    id:null,
    nome: '',
    cognome: ''
  };
  message = '';
  constructor(
    private service: DipendenteService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDipendente(this.route.snapshot.params["id"]);
    }
  }
  getDipendente(id: string): void {
    this.service.get(id)
      .subscribe({
        next: (data) => {
          this.currentDipendente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateDipendente(): void {
    this.message = '';
    this.service.update(this.currentDipendente.id, this.currentDipendente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'Dipendente aggiornato con successo';
        },
        error: (e) => console.error(e)
      });
  }

}
