import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from './character.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})

export class CharacterComponent {
  characters: Character[] = [];
  id!: string

  currentPage: number = 1;
  pageSize: number = 20;
  totalCharacters: number = 0;
  totalPages: number = 0;

  constructor (
    private readonly service: CharacterService,
    private readonly route: ActivatedRoute,
    private readonly viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = String(params['id']);
      this.loadCharacters();
    });
  }

  loadCharacters(): void {
    this.service.getCharacters(this.currentPage, this.pageSize).subscribe((res: any) => {
      const { info, results } = res;
      this.characters = results.map((character: Character) => {
        return { ...character, collapsed: true };
      });
      this.totalCharacters = info.count;
      this.totalPages = Math.ceil(this.totalCharacters / this.pageSize);
      this.viewportScroller.scrollToPosition([0, 0]); // Desplazamiento hacia arriba
      this.totalCharacters = info.count;
      this.totalPages = Math.ceil(this.totalCharacters / this.pageSize);
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

}


