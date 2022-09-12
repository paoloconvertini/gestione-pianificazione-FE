import {Component, OnInit, ViewChild} from '@angular/core';
import {Dipendente} from "../../../models/dipendente";
import {DipendenteService} from "../../../services/dipendente/dipendente.service";
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {AddDipendenteComponent} from "../add-dipendente/add-dipendente.component";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dipendentelist',
  templateUrl: './dipendentelist.component.html',
  styleUrls: ['./dipendentelist.component.css']
})
export class DipendentelistComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'azioni'];
  dataSource = new MatTableDataSource<Dipendente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loader = false;
  constructor(private service: DipendenteService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.retrieveDipendenti();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDipendenteComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refreshList();
      }
      console.log('The dialog was closed');

    });
  }

  openDeleteDialog(dipendente: Dipendente) {
    let msg = 'Sei sicuro di voler procedere con l\'eliminazione di';
    msg += dipendente.nome;
    msg += dipendente.cognome;
    msg += '?';
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: {msg: msg},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.deleteDipendente(dipendente.id);
      }
    });
  }

  retrieveDipendenti(): void {
    this.loader = true;
    this.service.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.loader = false;
          console.log(data);
        },
        error: (e) => {
          console.error(e);
          this.loader = false;
        }
      });
  }
  refreshList(): void {
    this.retrieveDipendenti();
  }

  updateDipendente(dipendente:Dipendente): void {
    this.service.update(dipendente.id, dipendente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
          dipendente.isEdit = false;
        },
        error: (e) => console.error(e)
      });
  }

  deleteDipendente(id: any): void {
    this.service.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
