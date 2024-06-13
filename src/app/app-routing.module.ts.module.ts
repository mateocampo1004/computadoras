
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryDetailComponent } from './components/inventory-detail/inventory-detail.component';

const routes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'create', component: InventoryFormComponent },
  { path: 'edit/:id', component: InventoryFormComponent },
  { path: 'detail/:id', component: InventoryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }