import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};

const apiUrl = `http://localhost:5001/api`;

@Injectable({
    providedIn: 'root',
})
export class BookService {
    passenger: any;
    token: any;
  
    constructor(private httpClient: HttpClient) {}
  
    getBooks(page:number, limit: number): Observable<Book[]> {
      return this.httpClient.get<Book[]>(`${apiUrl}/books/page=${page}/limit=${limit}`);
    }
    getBookById(id: string): Observable<Book[]> {
      return this.httpClient.get<Book[]>(`${apiUrl}/book/bookId=${id}`).pipe();
    }    
    getBooksByCategoryId(id: string): Observable<Book[]> {
        return this.httpClient.get<Book[]>(`${apiUrl}/book/categoryId=${id}`).pipe();
    }
  }