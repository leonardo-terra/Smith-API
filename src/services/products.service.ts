import IUser from '../interfaces/user.interface';
import productsModel from '../models/products.model';

const getAll = (): Promise<IUser[]> => productsModel.getAll();

export default { getAll };