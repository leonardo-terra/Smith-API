import IUser from '../interfaces/user.interface';
import usersModel from '../models/users.model';

const create = async (user: IUser):Promise<IUser> => {
  const { insertId } = await usersModel.create(user);
  const newUser = {
    id: insertId,
    ...user,
  };
  return newUser;
};

export default { create };