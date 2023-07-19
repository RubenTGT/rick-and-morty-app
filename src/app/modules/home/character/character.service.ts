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

  public getCharacters(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.CHARACTER_PAGE_API}${page}&pageSize=${pageSize}`;
    return this.httpClient.get<Character[]>(url);
  }

}
