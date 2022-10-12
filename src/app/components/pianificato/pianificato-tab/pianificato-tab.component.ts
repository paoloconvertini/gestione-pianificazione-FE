import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CommonListComponent} from "../../commonListComponent";
import {Progetto} from "../../../models/progetto";
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PianificatolistComponent} from "../pianificatolist/pianificatolist.component";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";
import {Pianificato} from "../../../models/pianificato";
import {MatPaginator} from "@angular/material/paginator";
import {PianificatoDipendente} from "../../../models/pianificatoDipendente";
import {MatTabChangeEvent} from "@angular/material/tabs";

export interface Tab {
  label: string;
  id: any;
}

@Component({
  selector: 'app-pianificato-tab',
  templateUrl: './pianificato-tab.component.html',
  styleUrls: ['./pianificato-tab.component.css']
})
export class PianificatoTabComponent implements OnInit {
  loader = false;
  asyncTabs: Tab[] = [];
  @ViewChild(PianificatolistComponent) child!:PianificatolistComponent;
  constructor(private service: ProgettoService) {

  }

  ngOnInit(): void {
    this.loader = true;
    this.service.getAllProgetti()
      .subscribe({
        next: (data: any[] | undefined) => {
          data?.forEach(p => {
            this.asyncTabs.push({label: p.nome, id: p.id});
        });
        },
        error: (e: any) => {
          console.error(e);
          this.loader = false;
        }
    })
  }

  onChangeTab($event: MatTabChangeEvent) {
    let id = this.asyncTabs.filter(tab => $event.tab.textLabel === tab.label)[0].id;
    this.child.getPianificatoByIdProgetto(id);
  }
}
