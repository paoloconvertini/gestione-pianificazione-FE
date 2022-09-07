import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentelistComponent }  from './components/dipendentelist/dipendentelist.component';
import { AddDipendenteComponent } from "./components/add-dipendente/add-dipendente.component";
import {EditDipendenteComponent} from "./components/edit-dipendente/edit-dipendente.component";

const routes: Routes = [
  { path: 'dipendenti', component: DipendentelistComponent},
  { path: 'dipendenti/edit/:id', component: EditDipendenteComponent},
  { path: 'add-dipendente', component: AddDipendenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
