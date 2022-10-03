import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Mese} from "../../../models/mese";

@Component({
  selector: 'app-pianificato-row',
  templateUrl: './pianificato-row.component.html',
  styleUrls: ['./pianificato-row.component.css']
})
export class PianificatoRowComponent implements OnInit {
  @Input() nomeDipendente: string | undefined;
  @Input() programmato!: Mese;
  @Input() fatturato!: Mese;
  andamento = new Mese();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.calcolaAndamento(this.programmato, this.fatturato, this.andamento);
  }

  ngOnChanges(changes: SimpleChanges){
    this.calcolaAndamento(changes['programmato'].currentValue, changes['fatturato'].currentValue, this.andamento);
  }

  private calcolaAndamento(programmato:Mese, fatturato:Mese, andamento:Mese){
    Object.entries(programmato).forEach(([key])=> {
      if(programmato[key as keyof Mese] === 0){
        andamento[key as keyof Mese] = 0;
      } else {
        andamento[key as keyof Mese] = (fatturato[key as keyof Mese]/programmato[key as keyof Mese])*100;
      }
    })
    this.cd.detectChanges();
  }
}
