import {Component, Directive} from "@angular/core";
import {CommonService} from "../services/CommonSerivce";
import {MatSnackBar} from "@angular/material/snack-bar";

@Directive()
export class CommonAddComponent<T> {

  protected constructor(private service: CommonService<T>, private _snackBar: MatSnackBar) {
  }

  save(msg:string, data:any): void {
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          if(res && !res.error) {
            this.openSnackBar(msg);
          }
        },
        error: (e) => console.error(e)
      });
  }

  private openSnackBar(msg:string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    });
  }
}
