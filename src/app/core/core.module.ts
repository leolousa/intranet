import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    CabecalhoComponent,
    HomeComponent,
    RodapeComponent
  ],
  exports: [
    CabecalhoComponent,
    HomeComponent,
    RodapeComponent
  ],
  providers: [
  ]
})

export class CoreModule { }
