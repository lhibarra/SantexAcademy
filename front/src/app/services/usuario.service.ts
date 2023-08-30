import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user'
import { environment } from '../../environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

  async createUser(user: User) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${user.token}`
    });
    try {
      const usersObservable = this.http.post(`${this.appUrl}user/`, user, {headers});
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUsers(token: string): Promise<User[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    try {
      const usersObservable = this.http.get<User[]>(`${this.appUrl}user/`, { headers });
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteUser({ userId, token }: { userId: number; token: string; }): Promise<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    try {
      const deleteUserObservable = this.http.delete(`${this.appUrl}user/${userId}`, { headers });
      await firstValueFrom(deleteUserObservable);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  async getIdUserSession() {
    const token = localStorage.getItem('token');
    if (token) {
      // Decodificar el token JWT
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
    
      // Obtener el ID del usuario del payload decodificado
      const userId = payload.id;
      console.log(userId);
    
      return userId;
    } else {
      console.log('No se encontró un token en el localStorage.');
    }

  }

}
