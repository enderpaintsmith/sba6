

import { calculateDiscount } from "../utils/discountCalculator.js";

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  rating: number;
  stock: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string,
    rating: number,
    stock: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    this.rating = rating;
    this.stock = stock;
  }

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`Original price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Price after discount: $${this.getPriceWithDiscount().toFixed(2)}`);
    console.log(`Rating: ${this.rating}`);
    console.log(`Stock: ${this.stock}`);
  }

  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage
    );

    return this.price - discountAmount;
  }
}