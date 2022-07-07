import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/HttpException';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpException;
  console.log('Aqui ainda está rodando');
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;