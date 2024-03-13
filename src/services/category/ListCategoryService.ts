import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    return await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    });
  }
}

export default new ListCategoryService;