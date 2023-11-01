import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Favorito } from "../models/favorito";

@Injectable({
    providedIn: 'root'
})

export class FavoritoService {
    
    API: string = 'http://localhost:8081/api/favorito';
    http = inject(HttpClient);


    listAll(): Observable<Favorito[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Favorito[]>(list);
    }
    findById(id: Number): Observable<Favorito[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Favorito[]>(list);
    }
        
    save(favorito: Favorito): Observable<any> {
        return this.http.post<any>(this.API, favorito);
    }
    update(id: Number, favorito: Favorito) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, favorito);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}
