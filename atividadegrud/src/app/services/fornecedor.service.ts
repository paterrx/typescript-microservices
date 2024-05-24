import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { listenerCount } from "process";
import { Observable } from "rxjs";
import { Fornecedor } from "../interfaces/Fornecedor";

@Injectable({
  providedIn: 'root'
})

export class FornecedorService{
  private apiUrl = 'http://localhost:3000/fornecedor';

  constructor(private http:HttpClient) {}

  cadastrar(fornecedor: Fornecedor){
    const httpHeaders =
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post(this.apiUrl, fornecedor, httpHeaders);
  }

  editar(fornecedor: Fornecedor){
    const httpHeaders =
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log(fornecedor)
    console.log(`${this.apiUrl}/${fornecedor.id}`)
    return this.http.put(`${this.apiUrl}/${fornecedor.id}`, fornecedor, httpHeaders);
  }

  listar(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.apiUrl) as Observable<Fornecedor[]>;
  }

  getId(id: string): Observable<Fornecedor>{
    console.log(`${this.apiUrl}/${id}`)
    return this.http.get<Fornecedor>(`${this.apiUrl}/${id}`) as Observable<Fornecedor>;
  }

  remover(id:string) {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
