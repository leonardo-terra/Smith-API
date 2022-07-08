import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const getAll = async (req: Request, res: Response) => {
  const orders = await ordersServices.getAll();
  console.log(orders);
  return res.status(200).send(orders);
};

export default { getAll };