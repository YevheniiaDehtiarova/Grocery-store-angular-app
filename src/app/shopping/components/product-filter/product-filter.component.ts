import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input('category') category: string;
  public categories$: any;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
   }

}
