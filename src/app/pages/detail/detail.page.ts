import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  itemId: string;
  product!: Product;
  relatedItems!: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.productService.getById(this.itemId).subscribe((product: Product) => {
      this.product = product;
      this.getRelatedItems();
    });
  }

  getRelatedItems() {
    this.productService.getAll().pipe(
      map((items: Product[]) => items.filter((item) => item.id !== this.product.id))
    ).subscribe((items: Product[]) => {
      this.relatedItems = items;
    });
  }

  async addToCart() {
    const cartItem = this.cartService.getItemById(this.product.id);
    if (cartItem) {
      // item already in cart, increase quantity
      this.cartService.changeQty(cartItem.id, cartItem.quantity + 1);
    } else {
      // item not in cart, add it
      const newItem: CartItem = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        quantity: 1,
      };
      this.cartService.addToCart(newItem);
    }
    this.router.navigate(['/cart']);
    // exibir o ToastController
    const toast = await this.toastController.create({
      message: 'Item adicionado ao carrinho',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
