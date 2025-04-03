import { ProductType } from "../types/product.type";

export class Product {
  name: string;
  types: ProductType[];
  constructor(name: string, types: ProductType[]) {
    this.name = name;
    this.types = types;
  }

}