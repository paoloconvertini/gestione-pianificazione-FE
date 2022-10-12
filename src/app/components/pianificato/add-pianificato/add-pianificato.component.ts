import {Component, Inject, OnInit} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-pianificato',
  templateUrl: './add-pianificato.component.html',
  styleUrls: ['./add-pianificato.component.css']
})
export class AddPianificatoComponent implements OnInit {
  loader = false;
  myControl = new FormControl<string | Dipendente>('');
  dipendenti: Dipendente[] = [];
  filteredOptions!: Observable<Dipendente[]>;
  selectedDipendente: any;
  constructor(@Inject(MAT_DIALOG_DATA) private dipInseriti:any[], private dipendenteService: DipendenteService) {
  }

  ngOnInit(): void {
    this.dipendenteService.getAll()
      .subscribe({
        next: (data: Dipendente[]) => {
          data?.filter(d=> !this.dipInseriti.includes(d.id)).forEach(d => {
            let dip = new Dipendente();
            dip.id = d.id;
            dip.fullName = d.nome + ' ' + d.cognome;
            this.dipendenti.push(dip);
          })
        },
        error: (e: any) => {
          console.error(e);
          this.loader = false;
        }
      })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.fullName;
        return name ? this._filter(name as string) : this.dipendenti.slice();
      }),
    );
  }

  displayFn(dipendente: Dipendente): string {
    return dipendente && dipendente.fullName ? dipendente.fullName : '';
  }

  private _filter(name: string): Dipendente[] {
    const filterValue = name.toLowerCase();
    return this.dipendenti.filter(option => option.fullName?.toLowerCase().includes(filterValue));
  }

  selectedOption($event: MatAutocompleteSelectedEvent) {
    this.selectedDipendente = $event.option.value;
  }
}
