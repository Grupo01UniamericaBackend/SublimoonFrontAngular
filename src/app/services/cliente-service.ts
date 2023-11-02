import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    
    API: string = 'http://localhost:8081/api/cliente';
    http = inject(HttpClient);


    listAll(): Observable<Cliente[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Cliente[]>(list);
    }
    findById(id: Number): Observable<Cliente[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Cliente[]>(list);
    }
        
    save(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.API, cliente);
    }
    update(cliente: Cliente) : Observable<Cliente>{
        return this.http.put<Cliente>(this.API, cliente);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}