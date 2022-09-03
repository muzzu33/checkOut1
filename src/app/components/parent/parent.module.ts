import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      },
    ],
  },
];

@NgModule({
  declarations: [ParentComponent, Child1Component, Child2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class ParentModule {}
