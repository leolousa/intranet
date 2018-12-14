import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent
  ],
  providers: [
  ]
})

export class CoreModule { }
