import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  nome: string;
  cognome: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<DeleteDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}