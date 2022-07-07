import express from 'express';
import productsController from './controllers/products.controller';
import Middlewares from './middlewares';

const app = express();

app.use(express.json());
app.get('/products', productsController.getAll);
app.post('/products', Middlewares.productValidationJoi, productsController.create);

export default app;

// start project !
