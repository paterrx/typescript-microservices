import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=20`).pipe(
      map((data: any) => {
        return data.results.map((pokemon: any) => {
          const id = pokemon.url.split('/').filter((el: string) => el.trim() !== '').pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return {...pokemon, id, imageUrl};
        });
      })
    );
  }
}
