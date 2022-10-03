import {Component, OnInit} from '@angular/core';
import {Progetto} from "../../../models/progetto";
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProgettoComponent} from "../add-progetto/add-progetto.component";
import {CommonListComponent} from "../../commonListComponent";

@Component({
  selector: 'app-progettolist',
  templateUrl: './progettolist.component.html',
  styleUrls: ['./progettolist.component.css']
})
export class ProgettolistComponent extends CommonListComponent<Progetto> implements OnInit {
  displayedColumns: string[] = ['nome', 'azioni'];
  constructor(service: ProgettoService, dialog: MatDialog) { super(service, dialog) }

  ngOnInit(): void {
    this.retrieveList();
  }

  override openDeleteDialog(progetto: Progetto) {
    super.openDeleteDialog(progetto, null);
  }

  openDialog(){
    {
      const dialogRef = this.dialog.open(AddProgettoComponent, {
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
