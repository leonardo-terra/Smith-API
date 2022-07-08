import { IOrders } from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';

const getAll = async (): Promise<IOrders[]> => { 
  const responseOrders = await ordersModel.getAll(); 
  const orders = responseOrders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: [order.productsIds],
  }));
  return orders;
};

export default { getAll };