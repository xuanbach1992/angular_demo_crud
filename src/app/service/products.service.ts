import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [
    {
      id: 1,
      name: 'adadas',
      price: 323
    },
    {
      id: 2,
      name: 'fsdfsdffsd',
      price: 124
    },
    {
      id: 3,
      name: 'adad1dfsas',
      price: 321234563
    }
  ];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  add(product) {
    // console.log(2343);
   return this.products.push(product);
  }
}
