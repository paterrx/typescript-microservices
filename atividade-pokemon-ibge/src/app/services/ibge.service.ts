import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estados } from '../interfaces/Estatos';

@Injectable({
  providedIn: 'root'
})

export class IbgeService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  constructor(private http: HttpClient) {}

  list(): Observable<Estados[]> {
    return this.http.get<Estados[]>(this.apiUrl) as Observable<Estados[]>;
  }
}
