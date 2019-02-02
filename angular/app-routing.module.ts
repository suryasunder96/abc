import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component'
import { Comp2Component } from './comp2/comp2.component'
import { Comp3Component } from './comp3/comp3.component'

const routes: Routes = [{path:"home",component:Comp1Component},
{path:"login",component:Comp2Component},
{path:"register",component:Comp3Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
