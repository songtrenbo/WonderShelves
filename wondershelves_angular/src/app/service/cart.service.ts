import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

const apiUrl = `http://localhost:5001/api`;
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  items: Cart[] = [];

  addToCart(addedItem: Cart) {
    this.items.push(addedItem);
    this.saveCart();
  }

  getItems() {
    return this.items;
  }
  getItem(bookId: string) {
    return this.items.find((o) => o._id === bookId);
  }
  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem('cart_items')!) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];

    localStorage.removeItem('cart_items');
  }

  removeItem(item: Cart) {
    const index = this.items.findIndex((o) => o._id === item._id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(bookId: string): boolean {
    return this.items.findIndex((o) => o._id === bookId) > -1;
  }

  Payment(carts: Cart[], userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('Token')!).accessToken,
      }),
    };
    return this.httpClient.post(
      `${apiUrl}?userId=${userId}`,
      carts,
      httpOptions
    );
  }
}
