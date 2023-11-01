import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../models/item";

@Injectable({
    providedIn: 'root'
})

export class ItemService {
    
    API: string = 'http://localhost:8081/api/item';
    http = inject(HttpClient);


    listAll(): Observable<Item[]> {
        const list = `${this.API}/lista`;
        return this.http.get<Item[]>(list);
    }
    findById(id: Number): Observable<Item[]> {
        const list = `${this.API}/${id}`;
        return this.http.get<Item[]>(list);
    }
        
    save(item: Item): Observable<any> {
        return this.http.post<any>(this.API, item);
    }
    update(id: Number, item: Item) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, item);
    }
          
    delete(id: number): Observable<any> {
    
        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
    }
}