import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentelistComponent }  from './components/dipendente/dipendentelist/dipendentelist.component';
import { AddDipendenteComponent } from "./components/dipendente/add-dipendente/add-dipendente.component";
import {RiepilogolistComponent} from "./components/riepilogo/riepilogolist/riepilogolist.component";
import {ProgettolistComponent} from "./components/progetto/progettolist/progettolist.component";
import {AddProgettoComponent} from "./components/progetto/add-progetto/add-progetto.component";
import {PianificatoTabComponent} from "./components/pianificato/pianificato-tab/pianificato-tab.component";
import {LoginComponent} from "./components/authentication/login/login.component";
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  { path: 'dipendenti', component: DipendentelistComponent, canActivate: [AuthGuard]},
  { path: 'add-dipendente', component: AddDipendenteComponent, canActivate: [AuthGuard]},
  { path: 'riepilogo', component: RiepilogolistComponent, canActivate: [AuthGuard]},
  { path: 'pianificato', component: PianificatoTabComponent, canActivate: [AuthGuard]},
  { path: 'progetto', component: ProgettolistComponent, canActivate: [AuthGuard]},
  { path: 'add-progetto', component: AddProgettoComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
