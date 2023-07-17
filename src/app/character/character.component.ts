import { Component } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  data: any[] = [];

  constructor (
    private readonly service: CharacterService,
  ) {}

  ngOnInit (): void {
    this.service.getCharacters().subscribe(data => {
      this.data = data
      console.log(this.data)
  })
  }
}