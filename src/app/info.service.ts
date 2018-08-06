import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private url : string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http:Http) { }

  getInfo():Observable<any>{
    return this.http.get(this.url).pipe(map(data => data.json()));
  }
}
