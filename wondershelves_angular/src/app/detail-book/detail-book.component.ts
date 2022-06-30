import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../model/book.model';
import { Cart } from '../model/cart.model';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css'],
})
export class DetailBookComponent implements OnInit {
  book = new Book();
  cart: Cart[] = [];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);

    this.cartService.loadCart();
    this.cart = this.cartService.getItems();

    this.route.params.subscribe((params: Params) => {
      this.getRoute(+params['id']);
    });
  }
  getRoute(id: any) {
    this.bookService.getBookById(id).subscribe((res: any) => {
      console.log(res); 
      this.book = res;
    });
  }
}
