import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Pianificato} from "../../../models/pianificato";
import {MatDialog} from "@angular/material/dialog";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";
import {MatTableDataSource} from "@angular/material/table";
import {PianificatoDipendente} from "../../../models/pianificatoDipendente";
import {MatPaginator} from "@angular/material/paginator";
import {PianificatoSommarioComponent} from "../pianificato-sommario/pianificato-sommario.component";
import {Mese} from "../../../models/mese";
import {AddPianificatoComponent} from "../add-pianificato/add-pianificato.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../snackbar/snackbar.component";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";


@Component({
  selector: 'app-pianificatolist',
  templateUrl: './pianificatolist.component.html',
  styleUrls: ['./pianificatolist.component.css']
})
export class PianificatolistComponent implements OnInit {
  loader = false;
  @Input() idProgetto!: number;
  displayedColumns: string[] = ['PianificatoDipendente']
  dataSource = new MatTableDataSource<PianificatoDipendente>;
  pianificato:Pianificato = new Pianificato();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: PianificatoService, private dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.pianificato.idProgetto = this.idProgetto;
  }

  aggiorna() {
    this.dataSource = new MatTableDataSource(this.pianificato.pianificatoDipendenteDTOList);
    this.dataSource.paginator = this.paginator;
    this.loader = false;
  }

  receiveDeleteEvent($event:number) {
    let msg = 'Sei sicuro di voler procedere con l\'eliminazione?';
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: {msg: msg},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.pianificato.pianificatoDipendenteDTOList?.splice($event, 1);
        this.aggiorna();
      }
    });
  }

  getPianificatoByIdProgetto(id: any){
    this.service.getPianificatoByIdProgetto(id)
      .subscribe({
        next: (res: Pianificato) => {
          console.log(res);
          if(!res || !res.idProgetto) {
            return;
          }
          this.pianificato = res;
          this.dataSource = new MatTableDataSource(this.pianificato.pianificatoDipendenteDTOList);
          this.dataSource.paginator = this.paginator;
          this.loader = false;
        },
        error: (err: any) => {
          console.error(err);
          this.loader = false;
        }
      })
  }


  openDialog(){
    let data: any[] = [];
    this.pianificato.pianificatoDipendenteDTOList?.forEach(el => {
      data.push(el.idDipendente);
    })
    const dialogRef = this.dialog.open(AddPianificatoComponent, {
      width:'30%',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        let dip = new PianificatoDipendente();
        dip.idDipendente = result.id;
        dip.nomeDipendente = result.fullName;
        dip.fatturato = new Mese();
        dip.programmato = new Mese();
        this.pianificato.pianificatoDipendenteDTOList.push(dip);
        this.aggiorna();
      }
    });
  }

  salva() {
    this.loader = true;
    this.service.create(this.pianificato).subscribe({
      next: (res) => {
        console.log(res);
        if(res && !res.error) {
          this._snackBar.openFromComponent(SnackbarComponent, {
            data: {
              snackType: 'Success',
              msg: 'Pianificazione salvata con successo'
            },
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000
          });
          this.aggiorna();
        }
      },
      error: (e) => {
        console.error(e);
        this._snackBar.openFromComponent(SnackbarComponent, {
          data: {
            snackType: 'Error',
            msg: 'ATTENZIONE! Pianificazione non salvata!!',
          },
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  sommario() {
    this.dialog.open(PianificatoSommarioComponent, {
      width: '80%',
      data: this.dataSource.data
    })
  }
}
