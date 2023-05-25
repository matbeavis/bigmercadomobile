export interface Product {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  imgURL: string;
}

export function createProduto() {
  return {
      id: '',
      nome: '',
      preco: 0,
      quantidade: 0,
      imgURL: ''
  };
}