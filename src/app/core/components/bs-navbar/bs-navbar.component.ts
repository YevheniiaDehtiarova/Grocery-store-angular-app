import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public cart$: Observable<ShoppingCart | null>;

  constructor(public auth: AuthService,
    private shoppingCardSevice: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await (await (this.shoppingCardSevice.getCart()));
  }


  logout() {
    this.auth.logout();
  }

}
