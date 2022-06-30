import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import jwt_decode from 'jwt-decode';
import {Subject} from 'rxjs';
import { tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};

const apiUrl = `http://localhost:5001/api`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  passenger: any;
  token: any;

  constructor(private httpClient: HttpClient) {}

  private _refresh = new Subject<void>();
  get refresh(){
    return this._refresh;
  }
  login(user: User): Observable<any> {
    return this.httpClient.post(`${apiUrl}/login`, user).pipe(
      tap(()=>{
        this._refresh.next();
      })
    );
  }
  register(user: User): Observable<any> {
    return this.httpClient.post(`${apiUrl}/register`, user);
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
