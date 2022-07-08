import IUser from '../interfaces/user.interface';
import usersModel from '../models/users.model';
import { generateJWTToken } from '../utils/jwt';

const create = async (user: IUser):Promise<string> => {
  const { insertId } = await usersModel.create(user);
  const newUser = {
    id: insertId,
    ...user,
  };
  const token = generateJWTToken(newUser);
  return token;
};

export default { create };