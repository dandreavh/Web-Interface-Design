import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// FICHERO PARA INTEGRAR TODOS LOS COMPONENTES DE MATERIAL

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
