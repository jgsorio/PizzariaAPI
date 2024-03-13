import prismaClient from "../../prisma";

interface CloseOrderRequest {
  id: string;
}

class CloseOrderService {
  async execute({ id }: CloseOrderRequest) {
    const order = await prismaClient.order.findFirst({
      where: {
        id: id
      }
    });

    if (!order) {
      throw new Error('Order does not exists');
    }

    await prismaClient.order.delete({
      where: {
        id: order.id
      }
    });
  }
}

export default new CloseOrderService;
