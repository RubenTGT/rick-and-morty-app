import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/1'

  constructor (private readonly httpClient: HttpClient) {}

  public getCharacters (): Observable<any[]> {
    return this.httpClient.get<any>(this.CHARACTER_PAGE_API)
  }

}
