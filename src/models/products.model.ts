import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/products.interface';
import connection from './connection';

const getAll = async ():Promise<IProduct[]> => {
  const [users] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return users as IProduct[];
};

const create = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)', 
    [product.name, product.amount],
  );
  return result;
};
  
export default { getAll, create };