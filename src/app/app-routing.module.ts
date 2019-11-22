import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {AddComponent} from './product/add/add.component';
import {EditComponent} from './product/edit/edit.component';


const routes: Routes = [
  {path: 'products', component: ListComponent},
  {path: 'products/create', component: AddComponent},
  {path: 'products/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
