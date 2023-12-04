import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Carrinho } from "../models/carrinho";

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService {
    
    API: string = 'http://3.129.90.134:8081/api/carrinho';
    http = inject(HttpClient);


    listAll(): Observable<Carrinho[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Carrinho[]>(list);
    }
    findById(id: Number): Observable<Carrinho[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Carrinho[]>(list);
    }
        
    save(carrinho: Carrinho): Observable<any> {
        return this.http.post<any>(this.API, carrinho);
    }
    update(id: Number, carrinho: Carrinho) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, carrinho);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}