import { JwtPayload, SignOptions, sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';
import HttpException from './HttpException';

const SECRET = process.env.JWT_SECRET || 'minhaSenhaSecreta';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateJWTToken = (user: Omit<IUser, 'password'>) => sign({ user }, SECRET, jwtConfig);

const authenticateToken = async (token:string | undefined): Promise<string | JwtPayload> => {
  if (!token) {
    throw new HttpException(401, 'jwt malformed');
  }

  try {
    const validate = verify(token, SECRET);
    return validate;
  } catch (error) {
    throw new HttpException(401, 'jwt malformed');
  }
};

export { generateJWTToken, authenticateToken };