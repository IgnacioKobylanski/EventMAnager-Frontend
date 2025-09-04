import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// La interfaz ahora incluye el nombre de usuario que el API debe devolver.
interface LoginResponse {
  token: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5145/api/users';
  

  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _userName$ = new BehaviorSubject<string | null>(localStorage.getItem('userName'));
  userName$ = this._userName$.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<LoginResponse | null> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
          this._isLoggedIn$.next(true);

          if (res.userName) {
            localStorage.setItem('userName', res.userName);
            this._userName$.next(res.userName);
          }
        }
      }),
      catchError(err => {
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this._isLoggedIn$.next(false);
    this._userName$.next(null);
  }
}
