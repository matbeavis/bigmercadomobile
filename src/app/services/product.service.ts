import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAll(): Product[] {
    return [
      {
        id: 1,
        price: 4.99,
        name: 'Banana',
        quantity: 1,
        image: 'assets/items/banana.jpg',
      },
      {
        id: 2,
        price: 6.66,
        name: 'Laranja',
        quantity: 1,
        image: 'assets/items/oranges.jpg',
      },
      {
        id: 3,
        price: 4.78,
        name: 'Ovos',
        quantity: 1,
        image: 'assets/items/eggs.jpg',
      },
      {
        id: 4,
        price: 5.78,
        name: 'Vegetais',
        quantity: 1,
        image: 'assets/items/vegetables.jpg',
      },
      {
        id: 5,
        price: 3.78,
        name: 'Limão',
        quantity: 1,
        image: 'assets/items/lemon.jpg',
      },
    ];
  }

  getById(id: number): Product {
    return this.getAll().find((item) => item.id === id)!;
  }
}
