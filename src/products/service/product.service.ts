import { Injectable } from '@nestjs/common';
import { Product } from '../interface/product.interface';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}