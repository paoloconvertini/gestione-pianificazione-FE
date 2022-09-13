import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Dipendente} from "../../../models/dipendente";
import {Pianificato} from "../../../models/pianificato";
import {MatPaginator} from "@angular/material/paginator";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pianificatolist',
  templateUrl: './pianificatolist.component.html',
  styleUrls: ['./pianificatolist.component.css']
})
export class PianificatolistComponent implements OnInit {
  displayedColumns: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
  dataSource = new MatTableDataSource<Pianificato>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loader = false;
  constructor(private service: DipendenteService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {

  }

}
