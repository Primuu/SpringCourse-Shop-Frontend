import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Product name 1",
        category: "Category 1",
        description: "Description of amazing product 1",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "Product name 2",
        category: "Category 1",
        description: "Description of amazing product 2",
        price: 111.99,
        currency: "PLN"
      },
      {
        name: "Product name 3",
        category: "Category 3",
        description: "Description of amazing product 3",
        price: 511.99,
        currency: "PLN"
      },
      {
        name: "Product name 4",
        category: "Category 1",
        description: "Description of amazing product 4",
        price: 9.99,
        currency: "USD"
      }
    ];
  }
}
