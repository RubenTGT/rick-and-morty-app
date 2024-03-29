import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharacterComponent } from './character/character.component';

//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
  ]

})
export class HomeModule { }
