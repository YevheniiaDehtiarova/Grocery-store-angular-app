import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: Array<Product> = [];
  public filteredProducts: Array<Product> = [];
  public category: string;
  cart$: Observable<ShoppingCart>;
  cart: any = {};

  constructor(
    public route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category') as string;
      this.populateProducts();
    });
  }

  private populateProducts() {
    this.productService.getAll().subscribe((products: any) => {
      this.filteredProducts = this.products = products;
    });
    this.applyFilter();
  }

  private applyFilter(){
    this.filteredProducts = this.category
    ? this.products.filter((p) => p.category == this.category)
    : this.products;
  }
}
