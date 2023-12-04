import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido";

@Injectable({
    providedIn: 'root'
})

export class PedidoService {
    
    API: string = 'http://3.129.90.134:8081/api/pedido';
    http = inject(HttpClient);


    listAll(): Observable<Pedido[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Pedido[]>(list);
    }
    findById(id: Number): Observable<Pedido[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Pedido[]>(list);
    }
        
    save(pedido: Pedido): Observable<any> {
        return this.http.post<any>(this.API, pedido);
    }
    update(id: Number, pedido: Pedido) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, pedido);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}
