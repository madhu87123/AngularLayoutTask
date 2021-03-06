import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BoxesComponent } from './boxes/boxes.component';


const routes: Routes = [
  {path : '' , component : BoxesComponent},
  {path : 'boxes' , component : BoxesComponent},
  {path : 'card' ,
  children : [
  {path : '' , component : CardComponent, data : { mode : 'add'}},
  {path : 'edit/:id' , component : CardComponent , data :  { mode : 'edit'}},
  {path : 'edit/:id' , component : BoxesComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

