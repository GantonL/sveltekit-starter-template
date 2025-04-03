import { Bamba, Bleach, Bread, getProduct } from "../config";
import { Cell } from "./cell";

export class Warehouse {
  warehouse: Cell[][] = [];

  constructor() {
    this.build();
  }

  build() {
    this.warehouse = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => new Cell(['none']))
    );
    this.warehouse[0][9] = new Cell(['hazardous']);
    this.warehouse[7][7] = new Cell(['chilled']);
    this.warehouse[0][1].insert(Array(3).fill(Bread));
    this.warehouse[0][9].insert(Array(8).fill(Bleach));
    this.warehouse[3][3].insert(Array(5).fill(Bamba));
  }

  allocateCell(productId: string, quantity: number): {foundCell: boolean, cell: string} {
    const response = {foundCell: false, cell: ''};
    const product = getProduct(productId);
    if (!product) {return response;}
    console.log(product);
    for (let row = 0; row < this.warehouse.length; row++) {
      for (let cell = 0; cell < this.warehouse[row].length; cell++) {
        const dedicatedCell = this.warehouse[row][cell];
        // console.log(row, cell, dedicatedCell.stock.length);
        const allowed = dedicatedCell.insertionAllowed(product.types);
        if (!allowed) {continue;}
        const insertRes = dedicatedCell.insert(Array(quantity).fill(product));
        if (!insertRes) {continue;}
        response.foundCell = true;
        response.cell = `${row},${cell}`;
        // console.log(row, cell, dedicatedCell.stock.length);
        return response;
      }
    }
    return  response;
  }
}