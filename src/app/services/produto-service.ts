import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";
import { Categoria } from "../enums/categoria";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    
    API: string = 'http://localhost:8081/api/produto';
    http = inject(HttpClient);


    listAll(): Observable<Produto[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Produto[]>(list);
    }
    findById(id: Number): Observable<Produto> {
        const list = `${this.API}/${id}`;
        return this.http.get<Produto>(list);
    }
        
    save(produto: Produto): Observable<any> {
        return this.http.post<any>(this.API, produto);
    }
    update(id: Number, produto: Produto) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, produto);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }

    listarPorCategoria(categoria: Categoria): Observable<Produto[]> {
        const url = `${this.API}/categoria/${categoria}`;
        return this.http.get<Produto[]>(url);   
      }
}