import { Injectable } from '@angular/core';
import { Conta } from './conta.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContasService {
  private readonly API = 'http://localhost:3000/contas';
  constructor(private http: HttpClient) {}

  listar(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.API);
  }
  criarConta(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(this.API, conta);
  }
  editarConta(conta: Conta): Observable<Conta> {
    const url = `${this.API}/${conta.id}`
    return this.http.put<Conta>(this.API, conta);
  }
  buscarPorId(id: number) : Observable<Conta>{
    const url = `${this.API}/${id}`
    return this.http.get<Conta>(url)
  }
}
