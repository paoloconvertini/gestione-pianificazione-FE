import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentelistComponent }  from './components/dipendente/dipendentelist/dipendentelist.component';
import { AddDipendenteComponent } from "./components/dipendente/add-dipendente/add-dipendente.component";
import {RiepilogolistComponent} from "./components/riepilogo/riepilogolist/riepilogolist.component";
import {PianificatolistComponent} from "./components/pianificato/pianificatolist/pianificatolist.component";
import {ProgettolistComponent} from "./components/progetto/progettolist/progettolist.component";
import {AddProgettoComponent} from "./components/progetto/add-progetto/add-progetto.component";
import {PianificatoTabComponent} from "./components/pianificato/pianificato-tab/pianificato-tab.component";

const routes: Routes = [
  { path: 'dipendenti', component: DipendentelistComponent},
  { path: 'add-dipendente', component: AddDipendenteComponent},
  { path: 'riepilogo', component: RiepilogolistComponent},
  { path: 'pianificato', component: PianificatoTabComponent},
  { path: 'progetto', component: ProgettolistComponent},
  { path: 'add-progetto', component: AddProgettoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
