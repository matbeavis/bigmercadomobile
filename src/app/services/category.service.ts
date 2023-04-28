import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAll() {
    return [
      { name: 'Vegetais', image: 'assets/categories/1.jpg' },
      { name: 'Padaria', image: 'assets/categories/2.jpg' },
      { name: 'Bebidas', image: 'assets/categories/6.jpg' },
      { name: 'Carne & Ovos', image: 'assets/categories/3.jpg' },
      { name: 'Frutas', image: 'assets/categories/5.jpg' },
      { name: 'Outros', image: 'assets/categories/4.jpg' },
    ];
  }
}
