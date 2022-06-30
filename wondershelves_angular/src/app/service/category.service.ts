import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};

const apiUrl = `http://localhost:5001/api`;

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    passenger: any;
    token: any;
  
    constructor(private httpClient: HttpClient) {}
  
    getCategories(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(`${apiUrl}/categories`);
    }
  }