import { Injectable } from '@angular/core';
import { Product, createProduto } from '../models/product.model';
import { Firestore, getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private firestoreDB: Firestore;
  constructor(private fireServ : FirebaseService) {
    this.firestoreDB = getFirestore(this.fireServ.getApp());
  }

  public async getAll(): Promise<Product[]> {
    const produtosCol = collection(
      this.firestoreDB, 'produtos');

    const produtosSnapshot = await getDocs(produtosCol);
    const produtosList: Product[] = produtosSnapshot.docs.map(
                              (doc)=>{
                                const docData = {...doc.data()};
                                return {
                                  id: doc.id,
                                  nome: docData['nome'],
                                  preco: docData['preco'],
                                  quantidade: docData['quantidade'],
                                  imgURL: docData['imgURL']
                                }
                              }
                          );

    return produtosList;
  }

  public async get(id: string): Promise<Product> {
    const docRef = doc(
            this.firestoreDB,
            'produtos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = { ...docSnap.data() };
      return {
        id: docSnap.id,
        nome: docData['nome'],
        preco: docData['preco'],
        quantidade: docData['quantidade'],
        imgURL: docData['imgURL']
      }
    }

    return createProduto();
  }

  public async add(produto: Product) {
    // @ts-ignore
    delete produto.id;
    const docRef = await addDoc(
                    collection(
                    this.firestoreDB,
                    'produtos'), 
                      {
                        ...produto
                      }
                    );

    return docRef;
    
  }

  public async update(produto: Product) {
    try {
      const produtosRef = collection(
        this.firestoreDB,
        'produtos'
      );
      
     return await setDoc( 
       doc(produtosRef, produto.id), {
        ...produto
      });


    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async delete(id: string) {
    return await deleteDoc( 
      doc(this.firestoreDB, 'produtos', id)
    );
  }
}
