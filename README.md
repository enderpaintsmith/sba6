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

A TypeScript application that retrieves product data from the [DummyJSON Products API](https://dummyjson.com/products), calculates discounted prices and taxes, and displays product information in the terminal.

## Features

- Retrieves product data asynchronously using `async/await` and Promises.
- Defines a `Product` class to represent product information.
- Calculates discounts using each product's discount percentage.
- Calculates taxes using category-based tax rates.
- Uses a custom `AppError` class for API and application errors.
- Handles failed API requests with `try/catch`.
- Displays product details, original prices, discounted prices, ratings, stock, and calculated taxes.

## Technologies

- TypeScript
- Node.js
- DummyJSON Products API

## Project Structure

```text
SBA6/
├── src/
│   ├── main.ts
│   ├── models/
│   │   └── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   └── utils/
│       ├── discountCalculator.ts
│       ├── errorHandler.ts
│       └── taxCalculator.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

## Business Rules

- Discounts are calculated using the product's `discountPercentage`.
- The standard tax rate is 4.75%.
- Products in the `groceries` category use a 3% tax rate.
- Discount and tax calculation functions return dollar amounts.
- The displayed tax is calculated using the discounted price.

## Setup and Execution

I## Setup and Execution

Install dependencies:

npm install

Compile the TypeScript files:

npm run build


Run the application:

npm start

The application retrieves product data from the DummyJSON API and displays the first five products, plus one grocery product when available.

## Error Handling and Testing

The application checks HTTP response status codes and throws a custom `AppError` when a request fails. Errors are caught and displayed by the main application.

Testing confirmed that the application retrieves product data from the DummyJSON API, calculates discounted prices, applies the 4.75% standard tax rate and 3% grocery tax rate, and handles HTTP 404 errors using a custom `AppError`. The application displays the first five products and one grocery product when available.

## Future Improvements

- Add automated unit tests for discount and tax calculations.
- Add product search, filtering, and sorting.
- Build an optional user interface for browsing products.
