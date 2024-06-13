
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { NzFormModule } from 'ng-zorro-antd/form'; // Importa el módulo de formulario de ng-zorro-antd
import { NzInputModule } from 'ng-zorro-antd/input'; // Importa otros módulos necesarios de ng-zorro-antd
import { NzButtonModule } from 'ng-zorro-antd/button'; // Importa el módulo de botones de ng-zorro-antd

@NgModule({
  declarations: [
    AppComponent,
    InventoryFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }