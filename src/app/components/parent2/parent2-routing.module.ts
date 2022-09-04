import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child21Component } from './child21/child21.component';
import { Child22Component } from './child22/child22.component';
import { Parent2Component } from './parent2.component';

const routes: Routes = [
  {path:'',component:Parent2Component,
    children:[
      {path:'child21',component:Child21Component},
      {path:'child22',component:Child22Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parent2RoutingModule { }
