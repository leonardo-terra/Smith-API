export interface IOrderFromBD {
  id: number;
  userId: number;
  productsIds: number;
}

export interface IOrders{
  id: number;
  userId: number;
  productsIds: number[];
}
