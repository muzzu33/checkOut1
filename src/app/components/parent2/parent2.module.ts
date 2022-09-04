import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

import { Parent2RoutingModule } from './parent2-routing.module';
import { Child21Component } from './child21/child21.component';
import { Child22Component } from './child22/child22.component';
import { Parent2Component } from './parent2.component';


@NgModule({
  declarations: [
    Parent2Component,
    Child21Component,
    Child22Component
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    Parent2RoutingModule
  ]
})
export class Parent2Module { }
