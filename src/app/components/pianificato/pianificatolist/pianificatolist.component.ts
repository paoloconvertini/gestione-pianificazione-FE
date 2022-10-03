import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Pianificato} from "../../../models/pianificato";
import {MatDialog} from "@angular/material/dialog";
import {PianificatoService} from "../../../services/pianificato/pianificato.service";
import {MatTableDataSource} from "@angular/material/table";
import {PianificatoDipendente} from "../../../models/pianificatoDipendente";
import {MatPaginator} from "@angular/material/paginator";
import {PianificatoSommarioComponent} from "../pianificato-sommario/pianificato-sommario.component";


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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: PianificatoService, private dialog: MatDialog) {
  }

  ngOnInit(): void {}

  getPianificatoByIdProgetto(id: any){
    this.service.getPianificatoByIdProgetto(id)
      .subscribe({
        next: (res: Pianificato) => {
          console.log(res);
          if(!res || !res.idProgetto) {
            return;
          }
          this.dataSource = new MatTableDataSource(res.pianificatoDipendenteDTOList);
          console.log('ds length: ' + this.dataSource.data.length);
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

  }

  salva() {

  }

  sommario() {
    this.dialog.open(PianificatoSommarioComponent, {
      width: '80%',
      data: this.dataSource.data
    })
  }
}
