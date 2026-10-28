import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = "https://apiempleadoscoreoauth.azurewebsites.net/";

  constructor(private _http: HttpClient) { }

  // Método para hacer el login y obtener el token
  login(username: string, password: string): Observable<any> {
    let json = {
      "userName": username,
      "password": password
    };
    let header = new HttpHeaders().set("Content-Type", "application/json");
    
    // El endpoint de OAuth suele ser /auth/login (o token)
    return this._http.post(this.urlApi + "auth/login", json, { headers: header });
  }

  // Saber si estamos logueados comprobando si existe el token
  estaLogueado(): boolean {
    if (localStorage.getItem("token") == null) {
      return false;
    } else {
      return true;
    }
  }

  // Cerrar sesión
  cerrarSesion(): void {
    localStorage.removeItem("token");
  }
}