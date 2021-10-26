import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    heroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule {
}