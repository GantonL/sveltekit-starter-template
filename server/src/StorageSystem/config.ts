import { Product } from "./classes/product";

export const Bamba = new Product('bamba', ['none']);
export const Bread = new Product('bread', ['none']);
export const Pasta = new Product('pasta', ['none']);
export const Salt = new Product('salt', ['none']);
export const Apple = new Product('apple', ['none']);
export const Yogurt = new Product('yogurt', ['chilled']);
export const Cheese = new Product('cheese', ['chilled']);
export const Insulin = new Product('insulin', ['chilled', 'hazardous']);
export const Bleach = new Product('bleach', ['hazardous']);
export const StainRemoval = new Product('StainRemoval', ['hazardous']);

const products = {
  bamba: Bamba,
  bread: Bread,
  pasta: Pasta,
  salt: Salt,
  apple :Apple,
  yogurt: Yogurt,
  cheese: Cheese,
  insulin: Insulin,
  bleach: Bleach,
  StainRemoval: StainRemoval,
};
export const getProduct = (id: string) => {
  return products[id];
}