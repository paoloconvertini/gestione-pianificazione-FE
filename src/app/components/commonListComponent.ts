import {MatTableDataSource} from "@angular/material/table";
import {Directive, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {CommonService} from "../services/CommonSerivce";
import {Model} from "../models/model";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Progetto} from "../models/progetto";

@Directive()
export abstract class CommonListComponent<T> {
  loader = false;
  dataSource = new MatTableDataSource<T>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected constructor(private service: CommonService<T>, protected dialog: MatDialog) {
  }

  retrieveList(): void {
    this.loader = true;
    setTimeout( () => {this.service.getAll()
      .subscribe({
        next: (data: any[] | undefined) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.loader = false;
          console.log(data);
        },
        error: (e: any) => {
          console.error(e);
          this.loader = false;
        }
      })
    }, 2000);
  }

  delete(id: any): void {
    this.service.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveList();
        },
        error: (e) => console.error(e)
      });
  }

  update(model: Model): void {
    this.service.update(model.id, model)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveList();
          model.isEdit = false;
        },
        error: (e) => console.error(e)
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDeleteDialog(model: any, extraProp: any) {
    let msg = 'Sei sicuro di voler procedere con l\'eliminazione di ';
    msg += model.nome;
    if (extraProp) {
      msg += " ";
      msg += extraProp;
    }
    msg += '?';
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: {msg: msg},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.delete(model.id);
      }
    });
  }

}
