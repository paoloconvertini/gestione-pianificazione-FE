import {Component, OnInit} from '@angular/core';
import {Progetto} from "../../../models/progetto";
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProgettoComponent} from "../add-progetto/add-progetto.component";
import {CommonListComponent} from "../../commonListComponent";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";

@Component({
  selector: 'app-progettolist',
  templateUrl: './progettolist.component.html',
  styleUrls: ['./progettolist.component.css']
})
export class ProgettolistComponent extends CommonListComponent<Progetto> implements OnInit {
  displayedColumns: string[] = ['nome', 'azioni'];
  constructor(private pianificatoService: PianificatoService, service: ProgettoService, dialog: MatDialog) { super(service, dialog) }

  ngOnInit(): void {
    this.retrieveList();
  }

  override openDeleteDialog(progetto: Progetto) {
    let msg:any = null;
    this.pianificatoService.checkProgettiPianificati(progetto.id)
      .subscribe({
        next: (res: boolean) => {
          if(res){
            msg = 'Il ' + progetto.nome + ' ha delle pianificazioni.\nProcedendo si cancelleranno anche tali pianificazioni.\n';
          }
          super.openDeleteDialog(progetto, null, msg);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
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
