import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'basic',loadChildren:() =>import('./components/parent/parent.module').then(m =>m.ParentModule)},
  {path:'expansion',loadChildren:() =>import('./components/parent2/parent2.module').then(m =>m.Parent2Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
