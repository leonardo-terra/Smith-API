import IUser from '../interfaces/user.interface';
import connection from './connection';

const getAll = async ():Promise<IUser[]> => {
  const [users] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return users as IUser[];
};

export default { getAll };