import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './core/menu/menu.component';
import {ListComponent} from './product/list/list.component';
import {LoginComponent} from './form/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './product/add/add.component';
import { EditComponent } from './product/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    LoginComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
