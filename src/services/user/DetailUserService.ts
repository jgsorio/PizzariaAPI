import prismaClient from "../../prisma";

class DetailUserService {
  async execute(userId: string) {
    const user = await prismaClient.user.findFirst(
      {
        where: {
          id: userId
        },
        select: {
          name: true,
          email: true
        }
      }
    )

    if (!user) {
      throw new Error('User does not exists'); 
    }

    return user;
  }
}

export default new DetailUserService;
