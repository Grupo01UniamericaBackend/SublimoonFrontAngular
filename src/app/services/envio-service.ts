import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Envio } from "../models/envio";

@Injectable({
    providedIn: 'root'
})

export class EnvioService {
    
    API: string = 'http://3.129.90.134:8081/api/envio';
    http = inject(HttpClient);


    listAll(): Observable<Envio[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Envio[]>(list);
    }
    findById(id: Number): Observable<Envio[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Envio[]>(list);
    }
        
    save(envio: Envio): Observable<any> {
        return this.http.post<any>(this.API, envio);
    }
    update(id: Number, envio: Envio) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, envio);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}