import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().positive().required(),
  password: Joi.string().min(8).required(),
}).required().messages({
  'any.required': '400|{{#label}} is required',
  'string.base': '422|{{#label}} must be a string',
  'string.min': '422|{{#label}} length must be at least 3 characters long',
  'number.base': '422|{{#label}} must be a number',
  'number.positive': '422|{{#label}} must be greater than or equal to 1',
});

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const [code, message]: string[] = error.message.split('|');
    const codeStatus: number = +code;
    if (message.includes('"password" length')) { 
      return res.status(codeStatus)
        .send({ message: '"password" length must be at least 8 characters long' }); 
    }
    return res.status(codeStatus).send({ message });
  }
  return next();
};