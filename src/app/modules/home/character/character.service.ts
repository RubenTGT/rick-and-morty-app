import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly CHARACTER_PAGE_API = 'https://rickandmortyapi.com/api/character/?page='

  constructor (private readonly httpClient: HttpClient) {}

  public getCharacters (page: string): Observable<any[]> {
    return this.httpClient.get<Character[]>(
      this.CHARACTER_PAGE_API + page
    )
  }

}
