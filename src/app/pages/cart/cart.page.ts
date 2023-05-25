import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any[] = [];

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  incrementItem(item: any) {
    item.quantidade += 1;
    this.saveCart();
  }

  decrementItem(item: any) {
    if (item.quantidade > 1) {
      item.quantidade -= 1;
    } else {
      this.removeFromCart(item);
    }
    this.saveCart();
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
