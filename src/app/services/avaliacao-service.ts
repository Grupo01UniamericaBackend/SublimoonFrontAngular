import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Avaliacao } from "../models/avaliacao";

@Injectable({
    providedIn: 'root'
})

export class AvaliacaoService {
    
    API: string = 'http://localhost:8081/api/avaliacao';
    http = inject(HttpClient);


    listAll(): Observable<Avaliacao[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Avaliacao[]>(list);
    }
    findById(id: Number): Observable<Avaliacao[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Avaliacao[]>(list);
    }
        
    save(avaliacao: Avaliacao): Observable<any> {
        return this.http.post<any>(this.API, avaliacao);
    }
    update(id: Number, avaliacao: Avaliacao) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, avaliacao);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}