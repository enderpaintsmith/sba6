===============
Steps:
================
# E-commerce Product Management System — Project Plan

## Goal

Build a TypeScript application that retrieves product data from DummyJSON, calculates discounts and taxes, and displays product information.

## Implementation Plan

1. Configure TypeScript compilation and Node.js execution.
2. Research the API response and define the `Product` class and its properties.
3. Implement discount and tax calculation utilities.
4. Create a custom error class and centralized error-handling utilities.
5. Build an asynchronous API service using `async/await`, Promises, and `try/catch`.
6. Implement the main application to fetch products, instantiate product objects, and display their details and prices.
7. Compile, run, and test calculations, API failures, and error handling.
8. Document the project and submit the GitHub repository and reflection.

## Business Rules

* Discounts are calculated from each product's `discountPercentage`.
* Standard tax is 4.75%.
* Products in the `groceries` category are taxed at 3%.
* Discount and tax utilities return dollar amounts.







===========================
****** REFLECTIONS ********
===========================


# E-commerce Product Management System


This project uses TypeScript and Node.js to pull product data from the DummyJSON API and display it in the terminal. I organized the code into separate files so the product class, API requests, calculations, and error handling are each in their own file.

The `Product` class stores the information for each product, including its title, description, price, category, rating, and stock. It has methods to display product details, and calculate the price after discount is applied.

Separated the discount and tax calculations into individual utility files. The app calculates a 4.75% tax rate for non-grocery products and a 3% rate for grocery products.

 Tax is calculated based on the discounted price, rather than the original price for groceries.
 
I created a custom `AppError` class to handle errors when something goes wrong with  API requests.

The API uses `async/await` to fetch  product data and checks response before processing. The main application shows the first five products returned by API, plus a grocery product if available. For each product, app will print the original price, discount, discounted price, rating, stock, & tax.

Project Files are organized under `src/`,  TypeScript will compile code into JavaScript in the `dist/` directory. 

Also updated `.gitignore` to keep dependencies, compiled files, build cache files, and macOS metadata out of the repository.

I tested the application to make sure it builds successfully, retrieves product data, calculates discounts and taxes correctly, and handles API errors, including an invalid endpoint returning a 404 response.