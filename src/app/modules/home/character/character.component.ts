import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})

export class CharacterComponent {

  characters: Character[] = [];
  id!: string

  constructor (
    private readonly service: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id']) 
      this.service.getCharacters(this.id).subscribe( (res: any) => {
        const {info, results} = res;
        this.characters = [...this.characters, ...results]
        console.log(this.characters) })
    })
  }
}


