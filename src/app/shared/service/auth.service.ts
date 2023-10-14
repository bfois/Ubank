import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Login } from '../interfaces/login'; // Asegúrate de importar la interfaz de inicio de sesión si no lo has hecho ya
import { User } from '../interfaces/user';
import { NewUser } from '../interfaces/newUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/v1'; // Reemplaza con tu URL del backend

  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, loginData, { headers: headers });
  }
  getUserInfo(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user?userId=${userId}`);
  }
  createUser(newUser: NewUser): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/create`, newUser, { headers }).pipe(
      catchError(error => {
        if (error.status === 400) {
          console.error('El correo electrónico ya está en uso');
        } else {
          console.error('Error al crear el usuario', error);
        }
        throw error;
      })
    );
  }
}