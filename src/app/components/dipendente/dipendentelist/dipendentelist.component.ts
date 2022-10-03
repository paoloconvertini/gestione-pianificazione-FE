import {Component, OnInit} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import {MatDialog} from "@angular/material/dialog";
import {CommonListComponent} from "../../commonListComponent";
import {AddDipendenteComponent} from "../add-dipendente/add-dipendente.component";

@Component({
  selector: 'app-dipendentelist',
  templateUrl: './dipendentelist.component.html',
  styleUrls: ['./dipendentelist.component.css']
})
export class DipendentelistComponent extends CommonListComponent<Dipendente> implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'azioni'];
 constructor(service: DipendenteService, dialog: MatDialog) {
    super(service, dialog);
  }

  ngOnInit(): void {
    this.retrieveList();
  }

  override openDeleteDialog(dipendente: Dipendente) {
    super.openDeleteDialog(dipendente, dipendente.cognome);
  }

  openDialog(){
    {
      const dialogRef = this.dialog.open(AddDipendenteComponent, {
        width: '30%'
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.retrieveList();
        }
        console.log('The dialog was closed');

      });
    }
  }

}
