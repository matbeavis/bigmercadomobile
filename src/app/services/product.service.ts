import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private firestore: AngularFirestore) {
    this.productsCollection = this.firestore.collection<Product>('products');
  }

  getAll(): Observable<Product[]> {
    return this.productsCollection.valueChanges();
  }

  getById(id: string): Observable<Product> {
    return this.productsCollection.doc<Product>(id).valueChanges().pipe(
      map((product: Product | undefined) => {
        if (product) {
          return product;
        } else {
          throw new Error('Produto nao encontrado');
        }
      })
    );
  }

  addProduct(product: Product): Promise<void> {
    const id = this.firestore.createId();
    product.id = id;
    return this.productsCollection.doc(id).set(product);
  }
  
  updateProduct(product: Product): Promise<void> {
    const id = product.id;
    return this.productsCollection.doc(id).update(product);
  }  

  deleteProduct(id: string): Promise<void> {
    return this.productsCollection.doc(id).delete();
  }
}
