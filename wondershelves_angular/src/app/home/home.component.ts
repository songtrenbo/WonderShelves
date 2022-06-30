import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  id: string;
  constructor(
    private categoryService: CategoryService) { }

  ngOnInit(): void {    
    this.categoryService.getCategories().subscribe((res:any)=>{
      console.log(res);
      this.categories = res;
      for(let category of this.categories) {
        console.log(category._id);
        this.id=category._id;
      }
    })
  }

}
