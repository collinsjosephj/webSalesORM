# E-Commerce Back-End Application Starring `Imsomnia`   ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

Internet retail, also known as e-commerce, is a significant component of the electronics industry, enabling businesses and consumers to conveniently buy and sell electronic products online. This is an industry growing by the very second, so welcome to my guide on understanding how ecommerce platforms, whether massive like Apple, or small such as a local shop in your area, operate within the digital landscape. In this README, we’ll explore how you can leverage your company to take it to new heights. 

This is a build based around modifying starter code, and it is a rundown of utilizing an Express.js API in conjunction with Sequelize to interact with a MySQL database.

Because this application won’t be deployed, I have provided a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. The link to the demonstration video on Google Drive can be found [here]()

## Table of Contents

- [Overview](#overview)
- [General Rundown](#General)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## General Rundown

### The video will demonstrate the applications:
- GET routes to return all categories, all products, and all tags being tested in Insomnia
- GET routes to return a single category, a single product, and a single tag being tested in Insomnia
- POST, PUT, and DELETE routes for categories being tested in Insomnia
- POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

### Technologies Demonstrated:

- `Express.js` a stream-lined web application tool for `Node.js`. 
- `Sequelize` a powerful Object Relational Mapping tool for `Node.js`.
- `dotenv` utilized to safekeep your information such as database credentials.
- `MySQL2` used hand-in-hand with Sequelize, a power client library for Node.js.

- `RESTful API` `CRUD`: Create, Read, Update, and Delete operations.
  
## Installation

- Clone the repository to your local machine.
  
  ```
  git clone https://github.com/collinsjosephj/webSalesORM.git
  ```
- Navigate to the project directory.
  
  ```
  cd webSalesORM
  ```
- Install the necessary dependencies by running npm install.

  ```
  npm i
  ```
  
- Create a `.env` file in the root of the project and add your MySQL database credentials
  
  ```
  DB_NAME='your-database-name'
  DB_USER='your-mysql-username'
  DB_PW='your-mysql-password'
  ```
  
## Usage

1. Create the database by running the schema command:
   ```
   npm run schema
   ```

2. Seed the database with the test data provided:
   ```
   npm run seed
   ```
3. Start the application:
   ```
   npm start
   ```

4. By following this guide, you will be able to set up and run the back end for an e-commerce site, interacting with a MySQL database through Sequelize, and testing the API routes using Insomnia.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request. You can also reach out to me via the links provided below. I would absolutely **love** to collaborate on any and all projects, big and small.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/collinsjosephj/webSalesORM/blob/main/LICENSE) file for details. 

## Questions

If you have any questions about the repo, open an issue or contact me directly via email [here](mailto:collinsjosephj@gmail.com). 

You can find more of my work on [GitHub](https://github.com/collinsjosephj@gmail.com).




