

import { fetchProducts } from "./services/apiService.js";
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";

async function main(): Promise<void> {
    try {
        const products: Product[] = await fetchProducts();

        console.log(`Successfully loaded ${products.length} products.\n`);

        const groceryProduct = products.find(
            (product) => product.category === "groceries"
        );

        const productsToDisplay = products.slice(0, 5);

        if (groceryProduct) {
            productsToDisplay.push(groceryProduct);
        } else {
            console.log("No grocery-category product was found in this API response.");
        }

      for (const product of productsToDisplay) {
  const tax = calculateTax(
    product.getPriceWithDiscount(),
    product.category
  );

  product.displayDetails();
  console.log(`Tax after discount: $${tax.toFixed(2)}`);
  console.log("-------------------------");
}
    } catch (error) {
        console.error("Application error:", error);
    }
}

main();
