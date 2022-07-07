import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const create = async (req: Request, res: Response):Promise<Response> => {
  const newUser = await usersServices.create(req.body);
  return res.status(201).send(newUser);
};

export default { create };