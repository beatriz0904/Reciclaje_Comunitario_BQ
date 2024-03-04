import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4200/api/usuarios/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }
}
