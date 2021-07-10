import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GraphicsCardsComponent} from './component/graphics-cards/graphics-cards.component'
import { GraphicCardDetailsComponent } from './component/graphic-card-details/graphic-card-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'graphics-cards', component: GraphicsCardsComponent },
  { path: 'details/:id', component: GraphicCardDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
