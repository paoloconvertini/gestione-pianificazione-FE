import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Progetto} from "../../../models/progetto";
import {MatPaginator} from "@angular/material/paginator";
import {ProgettoService} from "../../../services/progetto/progetto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddProgettoComponent} from "../add-progetto/add-progetto.component";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-progettolist',
  templateUrl: './progettolist.component.html',
  styleUrls: ['./progettolist.component.css']
})
export class ProgettolistComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'azioni'];
  dataSource = new MatTableDataSource<Progetto>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loader = false;
  constructor(private service: ProgettoService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.retrieveProgetti();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProgettoComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refreshList();
      }
      console.log('The dialog was closed');

    });
  }

  openDeleteDialog(progetto: Progetto) {
    let msg = 'Sei sicuro di voler procedere con l\'eliminazione di';
    msg += progetto.nome;
    msg += '?';
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: {msg: msg},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.deleteProgetto(progetto.id);
      }
    });
  }

  retrieveProgetti(): void {
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
    this.retrieveProgetti();
  }

  updateProgetto(progetto:Progetto): void {
    this.service.update(progetto.id, progetto)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
          progetto.isEdit = false;
        },
        error: (e) => console.error(e)
      });
  }

  deleteProgetto(id: any): void {
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
