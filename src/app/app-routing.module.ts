import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
