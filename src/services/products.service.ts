import IProduct from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const getAll = (): Promise<IProduct[]> => productsModel.getAll();

const create = async (product: IProduct): Promise<IProduct> => {
  const { insertId } = await productsModel.create(product);
  const newProducts = {
    id: insertId,
    ...product,
  };
  return newProducts;
};

export default { getAll, create };