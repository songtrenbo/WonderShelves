import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { CartComponent } from "./cart/cart.component";
import { CategoryComponent } from "./category/category.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'search', component: SearchComponent },
    { path: 'book/:id', component: DetailBookComponent },
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}