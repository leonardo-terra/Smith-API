import { IOrderFromBD } from '../interfaces/orders.interface';
import connection from './connection';

const getAll = async (): Promise<IOrderFromBD[]> => {
  const [orders] = await connection.execute(`
    SELECT Orders.id, Orders.userId, Products.id as productsIds FROM Trybesmith.Products
    INNER JOIN Trybesmith.Orders
    ON Trybesmith.Products.orderId = Trybesmith.Orders.id
;
  `);
  // https://stackoverflow.com/questions/31221980/how-to-access-a-rowdatapacket-object
  /* const result = Object.values(JSON.parse(JSON.stringify(orders))); */
  return orders as IOrderFromBD[];
};

export default { getAll };