import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

// https://joi.dev/api/?v=17.6.0
// label refere-se à chave

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  amount: Joi.string().min(2).required(),
}).required().messages({
  'any.required': '400|{{#label}} is required',
  'string.base': '422|{{#label}} must be a string',
  'string.min': '422|{{#label}} length must be at least 3 characters long',
});

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    const [code, message]: string[] = error.message.split('|');
    const codeStatus: number = +code;
    return res.status(codeStatus).send({ message });
  }
  return next();
};
