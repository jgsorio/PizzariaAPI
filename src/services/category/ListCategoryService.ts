import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    return await prismaClient.category.findMany();
  }
}

export default new ListCategoryService;