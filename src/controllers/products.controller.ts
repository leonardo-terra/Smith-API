import { Request, Response } from 'express';
import productsService from '../services/products.services';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const users = await productsService.getAll();
  return res.status(200).send(users);
};

const create = async (req: Request, res: Response):Promise<Response> => {
  const product = await productsService.create(req.body);
  return res.status(201).send(product);
};

export default { getAll, create };