import prismaClient from "../../prisma";

interface CategoryInterface {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryInterface) {
    if (!name) {
      throw new Error('Name is required');
    }

    const category = await prismaClient.category.create(
      { 
        data: {name: name},
        select: {
          id: true,
          name: true
        } 
      },
    )

    return category;
  }
}

export default new CreateCategoryService;