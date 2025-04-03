import { ProductType } from "../types/product.type";
import { Product } from "./product";

export class Cell {
  size: number;
  allowedProductTypes: ProductType[];
  stock: Product[];
  constructor(types: ProductType[]) {
    this.allowedProductTypes = types;
    this.size = 10;
    this.stock = [];
  }

  insert(products: Product[]): boolean {
    if (this.stock.length >= this.size) { return false; }
    if (products.length > this.size - this.stock.length) { return false; }
    if (this.stock.length > 0 && !products.every(p => this.stock.every(s => s.name === p.name))) { return false;}
    this.stock.push(...products);
    return true;
  }

  insertionAllowed(types: ProductType[]): boolean {
    return types.every(type => this.allowedProductTypes.includes(type));
  }
}