import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mese} from "../../../models/mese";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-pianificato-row',
  templateUrl: './pianificato-row.component.html',
  styleUrls: ['./pianificato-row.component.css']
})
export class PianificatoRowComponent implements OnInit {
  @Input() nomeDipendente: string | undefined;
  @Input() programmato!: Mese;
  @Input() fatturato!: Mese;
  @Input() index!: number;
  @Output() indexEvent = new EventEmitter<number>();
  digitsInfo:string = environment.DIGITS_INFO

  constructor() {
  }

  ngOnInit(): void {
  }

  sendDeleteEvent() {
      console.log('sendDeleteEvent!:' + this.index);
      this.indexEvent.emit(this.index);
  }

}
