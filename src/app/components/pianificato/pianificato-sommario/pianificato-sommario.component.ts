import {Component, Inject, Input, OnInit} from '@angular/core';
import {Mese} from "../../../models/mese";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PianificatoDipendente} from "../../../models/pianificatoDipendente";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-pianificato-sommario',
  templateUrl: './pianificato-sommario.component.html',
  styleUrls: ['./pianificato-sommario.component.css']
})
export class PianificatoSommarioComponent implements OnInit {
  programmato: Mese = new Mese();
  fatturato: Mese = new Mese();
  totaleProgrammato: number = 0;
  totaleFatturato: number = 0;
  andamento = 0;
  digitsInfo:string = environment.DIGITS_INFO

  constructor(@Inject(MAT_DIALOG_DATA) public data: PianificatoDipendente[]) {
  }

  ngOnInit(): void {
    console.log(this.data);
    for (const pd of this.data) {
      if (!pd.programmato) {
        pd.programmato = new Mese();
      }
      this.sum(this.programmato, pd.programmato);
      if (!pd.fatturato) {
        pd.fatturato = new Mese();
      }
      this.sum(this.fatturato, pd.fatturato);
    }
    this.totaleProgrammato = this.sumTotale(this.programmato);
    this.totaleFatturato = this.sumTotale(this.fatturato);
    this.andamento = this.totaleProgrammato===0?0:(this.totaleFatturato/this.totaleProgrammato*100);
  }

  private sum(mese: Mese, pd: Mese) {
    Object.entries(pd).forEach(([key, value]) => {
      if (!pd[key as keyof Mese]) {
        mese[key as keyof Mese] += 0;
      }
      mese[key as keyof Mese] += value;
    })
  }

  private sumTotale(mese: Mese):number {
    let ore = 0;
    Object.entries(mese).forEach(([key]) => {
      ore += mese[key as keyof Mese];
    })
    return ore;
  }

}
