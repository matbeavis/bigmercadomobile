import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, createProduto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  itemId: string = "";
  product: Product = createProduto();
  relatedItems!: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastController: ToastController,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['id'];

    this.productService.get(this.itemId)
      .then((data) => {
        this.product = data;
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao obter os dados do produto:', error);
      });

    this.productService.getAll()
      .then((data: Product[]) => {
        this.relatedItems = data.filter((item) => item.id !== this.product.id);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao obter os dados dos itens relacionados:', error);
      });
  }

  async addToCart() {
    const cartItem = this.cartService.getItemById(this.product.id);
    if (cartItem) {
      // item already in cart, increase quantity
      this.cartService.changeQty(cartItem.quantidade + 1, cartItem.id);
    } else {
      // item not in cart, add it
      const newItem: CartItem = {
        id: this.product.id,
        nome: this.product.nome,
        preco: this.product.preco,
        imgURL: this.product.imgURL,
        quantidade: 1,
      };
      this.cartService.addToCart(newItem);
    }
    this.router.navigate(['/cart']);
    // exibir o ToastController
    const toast = await this.toastController.create({
      message: 'Item adicionado ao carrinho',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
