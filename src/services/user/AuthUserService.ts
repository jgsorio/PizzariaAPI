import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid Credentials');
    }

    const token = sign({
      name: user.name,
      email: user.email
    }, process.env.JWT_TOKEN || "", {
      subject: user.id,
      expiresIn: '1d'
    })

    return {name: user.name, email: user.email, token};
  }
}

export default new AuthUserService;