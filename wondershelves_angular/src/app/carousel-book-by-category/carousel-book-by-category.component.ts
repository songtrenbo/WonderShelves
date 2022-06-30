import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Book } from '../model/book.model';
import { Cart } from '../model/cart.model';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-carousel-book-by-category',
  templateUrl: './carousel-book-by-category.component.html',
  styleUrls: ['./carousel-book-by-category.component.css'],
})
export class CarouselBookByCategoryComponent implements OnInit {
  @Input() categoryId: string;
  books: Book[] = [];
  carts: Cart[] = [];
  Id: string;
  Active: string;
  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bookService
      .getBooksByCategoryId(this.categoryId)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
    this.cartService.loadCart();
    this.carts = this.cartService.getItems();
  }
  AddToCart( book: Book
    // bookId: string, bookPrice:number, bookQuantity:number
    ) {
    let existBook = this.cartService.itemInCart(book._id);
    if (!existBook) {
      var cart = new Cart();
      cart._id = book._id;
      cart.price = book.price;
      cart.quantity = book.quantity;
      cart.subQuantity = 1;
      cart.subPrice = book.price;
      cart.title = book.title;
      cart.image = book.image;
      this.cartService.addToCart(cart); //add cart in cart
      this.carts = [...this.cartService.getItems()];
      Swal.fire({
        icon: 'success',
        title: 'Add book to cart successfully',
        showConfirmButton: false,
        timer: 1400,
      });
    }
    else if(existBook){
      let getBook = this.cartService.getItem(book._id);
      if(getBook!.subQuantity<book.quantity){
        getBook!.subQuantity += 1;
        getBook!.subPrice =  getBook!.subPrice + book.price;
        this.cartService.saveCart();
        Swal.fire({
          icon: 'success',
          title: 'Add book to cart successfully',
          showConfirmButton: false,
          timer: 1400,
        });
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Book out of stock',
          showConfirmButton: false,
          timer: 1400,
        });
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Something wrong',
        showConfirmButton: false,
        timer: 1400,
      });
    }
  }
}
