import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SERVER_BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = SERVER_BASE_URL 
  private tokenKey = 'tokenKey';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token); 
        }
      })
    );
  }
  register(email: string,username:string, password: string, firstName: string, lastName: string, gender: string, dateOfBirth: string): Observable<any> {
    const body = {
        email,
        username,
        password,
        firstName,
        lastName,
        gender,
        dateOfBirth,
    };
    return this.http.post(`${this.apiUrl}/auth/register`, body)
  
}
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}