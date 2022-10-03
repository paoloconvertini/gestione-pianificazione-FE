import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CommonService} from "../../services/CommonSerivce";
import {ProgettoService} from "../../services/progetto/progetto.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  formControl = new FormControl('');
  list:any = [];
  private service: any;
  constructor(service: ProgettoService) {
    this.service = service;
  }


  ngOnInit(): void {
    this.service.getAll()
      .subscribe({
        next: (data: any[] | undefined) => {
          this.list = data;
          console.log(data);
        },
        error: (e: any) => {
          console.error(e);
        }
      });
  }

}
