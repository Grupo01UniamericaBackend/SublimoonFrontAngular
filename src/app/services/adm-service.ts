import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Adm } from "../models/adm";


@Injectable({
    providedIn: 'root'
})

export class AdmService {
    
    API: string = 'http://3.129.90.134:8081/api/adm';
    http = inject(HttpClient);


    listAll(): Observable<Adm[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Adm[]>(list);
    }
    findById(id: Number): Observable<Adm[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Adm[]>(list);
    }
        
    save(adm: Adm): Observable<any> {
        return this.http.post<any>(this.API, adm);
    }
    update(id: Number, adm: Adm) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, adm);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}
