import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/page/1' },
  { path: 'home/page/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}