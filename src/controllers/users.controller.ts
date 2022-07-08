import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const create = async (req: Request, res: Response):Promise<Response> => {
  const token = await usersServices.create(req.body);
  return res.status(201).send({ token });
};

export default { create };