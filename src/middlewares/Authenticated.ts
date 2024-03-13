import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
  sub: string;
}

export default function Authenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  const { sub } = verify(authToken, process.env.JWT_TOKEN ?? '') as Payload;
  request.userId = sub;
  next();
}
