import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  registrarParticipante(participante: any): Observable<any> {
    return this.http.post<any>('http:/localhost:5001/api/products/', participante);
  }
}
