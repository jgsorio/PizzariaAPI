import prismaClient from "../../prisma";

class RemoveItemService {
  async execute(id: string) {
    const item = await prismaClient.item.findFirst({
      where: {
        id: id
      }
    });

    if (!item) {
      throw new Error('Item does not exists');
    }

    await prismaClient.item.delete({
      where: {
        id: item.id
      }
    });
  }
}

export default new RemoveItemService;
