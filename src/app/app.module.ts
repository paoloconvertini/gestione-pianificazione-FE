import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DipendentelistComponent} from './components/dipendente/dipendentelist/dipendentelist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddDipendenteComponent} from './components/dipendente/add-dipendente/add-dipendente.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DeleteDialogComponent} from './components/delete-dialog/delete-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {AddProgettoComponent} from './components/progetto/add-progetto/add-progetto.component';
import {ProgettolistComponent} from './components/progetto/progettolist/progettolist.component';
import {PianificatolistComponent} from './components/pianificato/pianificatolist/pianificatolist.component';
import {RiepilogolistComponent} from './components/riepilogo/riepilogolist/riepilogolist.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from '@angular/material/select';
import {AddPianificatoComponent} from './components/pianificato/add-pianificato/add-pianificato.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {PianificatoTabComponent} from './components/pianificato/pianificato-tab/pianificato-tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {PianificatoRowComponent} from './components/pianificato/pianificato-row/pianificato-row.component';
import {
  PianificatoSommarioComponent
} from './components/pianificato/pianificato-sommario/pianificato-sommario.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SnackbarComponent} from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DipendentelistComponent,
    AddDipendenteComponent,
    DeleteDialogComponent,
    AddProgettoComponent,
    ProgettolistComponent,
    PianificatolistComponent,
    RiepilogolistComponent,
    AddPianificatoComponent,
    PianificatoTabComponent,
    PianificatoRowComponent,
    PianificatoSommarioComponent,
    SnackbarComponent,
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
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatTabsModule,
        MatAutocompleteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
