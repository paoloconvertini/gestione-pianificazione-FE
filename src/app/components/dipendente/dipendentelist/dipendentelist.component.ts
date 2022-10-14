import {Component, OnInit} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import {MatDialog} from "@angular/material/dialog";
import {CommonListComponent} from "../../commonListComponent";
import {AddDipendenteComponent} from "../add-dipendente/add-dipendente.component";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";
import {Pianificato} from "../../../models/pianificato";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-dipendentelist',
  templateUrl: './dipendentelist.component.html',
  styleUrls: ['./dipendentelist.component.css']
})
export class DipendentelistComponent extends CommonListComponent<Dipendente> implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'azioni'];
 constructor(private pianificatoService: PianificatoService, service: DipendenteService, dialog: MatDialog) {
    super(service, dialog);
  }

  ngOnInit(): void {
    this.retrieveList();
  }

  override openDeleteDialog(dipendente: Dipendente) {
    let msg:any = null;
    this.pianificatoService.checkDipendentiPianificati(dipendente.id)
      .subscribe({
        next: (res: boolean) => {
          if(res){
            msg = dipendente.nome + ' ' + dipendente.cognome + ' ha delle pianificazioni.\nProcedendo si cancelleranno anche tali pianificazioni.\n';
          }
          super.openDeleteDialog(dipendente, dipendente.cognome, msg);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
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
