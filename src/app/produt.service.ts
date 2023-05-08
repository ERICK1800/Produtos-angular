import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    let url = "http://localhost:3000/produtos";
    return this.http.get<Produto[]>(url);
  }

}
