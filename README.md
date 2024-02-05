# VASHOP-API

Welcome to the eCommerce API, a robust and secure backend service designed to handle various aspects of product management, user interactions within an e-commerce ecosystem, and product reviews for the website. This API empowers users to explore and engage with a diverse range of products, search and filter through them seemlessly, leave reviews.

## Features
- **Authentication:** User can register on our platform to add or delete reviews. Product viewing does not require authentication. Secure user authentication ensures that only authorized users can add and manage their reviews.
- **Authorization:** Users can only manage their own reviews, ensuring data privacy and security.
- **Product management:** Add product, Get all products, Get a particular product, Search product, filter product
- **Review handling:** Add a review, Delete your review

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing task and user data.
- **MongoDB Atlas:** cloud database by mongoDB helps in making the application platform independent.
- **Bcrypt:** Library for secure password hashing.
- **JsonWebToken:** For generating authentication tokens.

## API Reference

#### Deployed API Reference

```
https://vashop-api.onrender.com/
```

## Getting Started

To get started with the VASHOP-API, follow these steps:

1. Clone the repository: 
```bash
git clone https://github.com/vanshulagarwal/VASHOP-api
```

2. Navigate to the project directory:
```bash
cd VASHOP-api
```

3. Install dependencies:
```bash
npm install
```

4. Configure environment variables: If you do not have mongoDB installed on your system, create a .env file for sensitive information like database credentials of mongoDB Atlas, and ensure it is included in your .gitignore file.

5. Run the server:
```bash
node app.js
```

## Routes

### User Routes
All POST routes receive data in json format. Required data: email, password
- `POST /api/v1/user/register`: Register a new user

- `POST /api/v1/user/login`: Authenticate a user

- `GET /api/v1/user/logout`: Log out the authenticated user.

| Route | Required Params |
| :-------- | :-------- |
| Register |  `name` `email` `password` |
| Login   |   `email` `password` |
| Logout |  - |

### Product Routes

- `POST /api/v1/products/new`: Add a new product.

- `GET /api/v1/products`: Get all products.

- `GET /api/v1/products/products?category=${categ}&price[gt]=${valueA}&price[lt]=${valueB}`: Get products filtered by category or price.
- `GET /api/v1/products?keyword=${input}`: Search products by product name.
- `GET /api/v1/products/:id` : Get details of a specific product.


| Route | Required Params                       |
| :-------- | :-------------------------------- |
| New Product |  `name` `description` `oldPrice` `price` `category` `imgPath` `imgPath2` |

### Review Routes
All these routes require the user to be authenticated.

- `POST /api/v1/products/:id/addreview`: Post a new review.
- `DELETE /api/v1/products/:id/deletereview/:reviewId`: Delete your review.

| Route | Required Params                       |
| :-------- | :-------------------------------- |
| Add Review | `title` `rating` `comment(optional)` |
