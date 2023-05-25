import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([
    {
      id: 'id1',
      nome: 'Frutos do Mar',
      preco: 12,
      imgURL: 'assets/images/foods/seafood-dishes.png',
      quantidade: 1,
    },
  ]);

  getCart() {
    return this.items$.asObservable();
  }

  addToCart(newItem: CartItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
  }

  removeItem(id: string) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
  }

  changeQty(quantidade: number, id: string) {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantidade += quantidade;
    this.items$.next(items);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantidade * item.preco;
        });

        return total;
      })
    );
  }
  getItemById(id: string): CartItem | null {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    return items[index];
  }  
}
