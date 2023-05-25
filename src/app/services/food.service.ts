import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: '1',
        title: 'Frutos do Mar',
        price: 12,
        image: 'assets/images/foods/seafood-dishes.png',
        description:
          'Frutos do Mar fresquinhos para você!',
      },
      {
        id: '2',
        title: 'Hamburger',
        price: 21,
        image: 'assets/images/foods/hamburger.png',
        description:
          'Suculento e de melhor qualidade, derrete na boca!',
      },
      {
        id: '3',
        title: 'Mexilhões',
        price: 16,
        image: 'assets/images/foods/mussel.png',
        description:
          'Mexilhões importados diretamente da fenda do biquini',
      },
      {
        id: '4',
        title: 'Pizza',
        price: 20,
        image: 'assets/images/foods/pizza.png',
        description:
          'Pizza Italiana autêntica da familia Patente',
      },
      {
        id: '5',
        title: 'Café da manhã',
        price: 10,
        image: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'Café da manhã americano classico: ovos, pão e bacon ',
      },
      {
        id: '6',
        title: 'Espaguete',
        price: 13,
        image: 'assets/images/foods/tambi.png',
        description:
          'Espaguete autentico italiano da familia Patente',
      },
    ];
  }

  getFood(id: string): Food | null {
    const foodArray = this.getFoods();
    const food = foodArray.find((f) => f.id === id);
    return food ? food : null;
  }
}  
