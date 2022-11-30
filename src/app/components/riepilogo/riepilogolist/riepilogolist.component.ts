import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Pianificato} from "../../../models/pianificato";
import {MatTableDataSource} from "@angular/material/table";
import {RiepilogoService} from "../../../services/riepilogo/riepilogo.service";
import {PianificatoDipendente} from "../../../models/pianificatoDipendente";
import {MatPaginator} from "@angular/material/paginator";
import {Riepilogo} from "../../../models/riepilogo";

@Component({
  selector: 'app-riepilogolist',
  templateUrl: './riepilogolist.component.html',
  styleUrls: ['./riepilogolist.component.css']
})
export class RiepilogolistComponent implements OnInit {
  loader = false;
  displayedColumns: string[] = ['Dipendente', 'Pianificato', 'Gennaio', 'Febbraio', 'Marzo', 'Aprile'
  ,'Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre','progetti']
  dataSource = new MatTableDataSource<Riepilogo>;
  riepilogo:Riepilogo = new Riepilogo();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: RiepilogoService) { }

  ngOnInit(): void {
    this.getRiepilogo();
  }

  getRiepilogo(){
    this.service.getRiepilogo()
      .subscribe({
        next: (data: any[] | undefined) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.loader = false;
        },
        error: (err: any) => {
          console.error(err);
          this.loader = false;
        }
      })
  }
}
