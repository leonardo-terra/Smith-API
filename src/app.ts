import express from 'express';
import ordersController from './controllers/orders.controller';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import Middlewares from './middlewares';

// Start express application
const app = express();
app.use(express.json());

// Routes
//     Products
app.get('/products', productsController.getAll);
app.post('/products', Middlewares.productValidationJoi, productsController.create);

//     Users
app.post('/users', Middlewares.userValidationJoi, usersController.create);

//     Orders
app.get('/orders', ordersController.getAll);

// Error middleware
app.use(Middlewares.httpErrorMiddleware);

export default app;

// start project !
