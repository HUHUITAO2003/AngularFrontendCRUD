import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path : 'modal',
    component : ModalComponent
  },
  {
    path : '',
    component : TableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
