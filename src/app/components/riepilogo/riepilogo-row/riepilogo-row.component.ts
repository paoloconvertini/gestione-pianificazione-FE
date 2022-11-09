import {Component, Input, OnInit} from '@angular/core';
import {Mese} from "../../../models/mese";

@Component({
  selector: 'app-riepilogo-row',
  templateUrl: './riepilogo-row.component.html',
  styleUrls: ['./riepilogo-row.component.css']
})
export class RiepilogoRowComponent implements OnInit {
  @Input() dipendente: string | undefined;
  @Input() programmato!: Mese;
  @Input() fatturato!: Mese;
  @Input() progetti!: string;
  constructor() { }

  ngOnInit(): void {
    console.log('dipendente: ' + this.dipendente);
  }

}
