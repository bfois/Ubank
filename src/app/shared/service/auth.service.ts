import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login'; // Asegúrate de importar la interfaz de inicio de sesión si no lo has hecho ya

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/v1'; // Reemplaza con tu URL del backend

  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, loginData, { headers: headers });
  }
}