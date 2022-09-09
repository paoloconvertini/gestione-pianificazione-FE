import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DipendentelistComponent } from './components/dipendente/dipendentelist/dipendentelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDipendenteComponent } from './components/dipendente/add-dipendente/add-dipendente.component';
import { EditDipendenteComponent } from './components/dipendente/edit-dipendente/edit-dipendente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DeleteDialogComponent } from './components/dipendente/delete-dialog/delete-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { AddProgettoComponent } from './components/progetto/add-progetto/add-progetto.component';
import { EditProgettoComponent } from './components/progetto/edit-progetto/edit-progetto.component';

@NgModule({
  declarations: [
    AppComponent,
    DipendentelistComponent,
    AddDipendenteComponent,
    EditDipendenteComponent,
    DeleteDialogComponent,
    AddProgettoComponent,
    EditProgettoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
