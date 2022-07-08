import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/HttpException';
import { authenticateToken } from '../utils/jwt';

const authentication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;
  const payload = await authenticateToken(token);
    
  if (!payload) throw new HttpException(400, 'Token not found');
    
  res.locals.payload = payload;
  next();
};

export default { authentication };