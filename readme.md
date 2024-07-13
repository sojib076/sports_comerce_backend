 <div align="center">
  <h1> DS SPORTS ACCESSORIES Backend </h1>
</div>


## Description
This is the backend for the DS Sports Accessories project. It is a RESTful API built with Node.js, Express.js, and MongoDB. It is hosted on vercel and the database is hosted on MongoDB Atlas. 

## Features
- User can add a product
- User can get all products
- User can get a product by id
- User can update a product
- User can delete a product
- user can add a product to cart

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints 

- POST /users/
- GET /users/products
- GET /users/:id
- POST /users/checkstock
- POST /users/updatestock
- DELETE /users/:id
- PUT /users/:id

## Setup
- Clone the repository
- Run `npm install` to install dependencies
- Create a `.env` file in the root directory and add the following environment variables
  - PORT : 5000
  - MONGODB_URI

- Run `npm start` to start the server
 
