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
        
    save(cliente: Cliente): Observable<any> {
        return this.http.post<any>(this.API, cliente);
    }
    update(id: Number, cliente: Cliente) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, cliente);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}