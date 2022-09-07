import { Component, OnInit } from '@angular/core';
import {Dipendente} from "../../models/dipendente";
import {DipendenteService} from "../../services/dipendente.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dipendentelist',
  templateUrl: './dipendentelist.component.html',
  styleUrls: ['./dipendentelist.component.css']
})
export class DipendentelistComponent implements OnInit {
  dipendenti?: Dipendente[];
  currentDipendente: Dipendente = {};
  currentIndex = -1;
  nome = '';
  cognome = '';
  constructor(private service: DipendenteService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.retrieveDipendenti();
  }
  retrieveDipendenti(): void {
    this.service.getAll()
      .subscribe({
        next: (data) => {
          this.dipendenti = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveDipendenti();
    this.currentDipendente = {};
    this.currentIndex = -1;
  }

  updateDipendente(dipendente:Dipendente): void {
    this.service.update(dipendente.id, dipendente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  deleteDipendente(id: any): void {
    this.service.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  /*removeAllTutorials(): void {
    this.service.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchTitle(): void {
    this.currentDipendente = {};
    this.currentIndex = -1;
    this.service.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.dipendenti = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }*/

}
