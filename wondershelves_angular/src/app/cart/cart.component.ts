import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
  >;
  carts: Cart[] = [];
  totalQuantity: number=0;
  total:number=0;
  isLogin: boolean=false;
  constructor(
    private cartService: CartService,
    private currencyPipe: CurrencyPipe 
  ) { }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.carts = this.cartService.getItems();

    this.carts.map(
      (e) => {
        this.totalQuantity += e.subQuantity;
        this.total += e.subPrice;
      }
    );
  }

  changeSubtotal(item: Cart, index: number) {
    const qty = item.subQuantity;
    const amt = item.price;
    const subTotal = amt * qty;
    item.subPrice = subTotal;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");
    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
    this.totalQuantity = 0;
    this.total = 0;
    this.carts.map(
      (e) => {
        this.totalQuantity += e.subQuantity;
        this.total += e.subPrice;
      }
    );
  }

  removeFromCart(item: Cart) {
    this.cartService.removeItem(item);
    this.carts = this.cartService.getItems();
    this.totalQuantity = 0;
    this.total = 0;
    this.carts.map(
      (e) => {
        this.totalQuantity += e.subQuantity;
        this.total += e.subPrice;
      }
    );
  }

  ClearCart(){
    this.cartService.clearCart();
    this.carts = [...this.cartService.getItems()];
    this.totalQuantity = 0;
    this.total = 0;

  }

}
