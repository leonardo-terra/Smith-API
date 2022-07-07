import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const users = await productsService.getAll();
  return res.status(200).send(users);
};

export default { getAll };