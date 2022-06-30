import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './category/category.component';
import { BlogComponent } from './blog/blog.component';
import { SearchComponent } from './search/search.component';
import { CarouselBookByCategoryComponent } from './carousel-book-by-category/carousel-book-by-category.component';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './service/category.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { UserService } from './service/user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CategoryComponent,
    BlogComponent,
    SearchComponent,
    CarouselBookByCategoryComponent,
    DetailBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
  ],
  providers: [BookService, CategoryService, UserService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
