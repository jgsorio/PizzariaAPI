import prismaClient from "../../prisma";

interface DoneRequest {
  order_id: string;
}

class DoneOrderService {
  async execute({ order_id }: DoneRequest) {
    const order = await prismaClient.order.findFirst({
      where: {
        id: order_id
      }
    });

    if (!order) {
      throw new Error('Order does not exists');
    }

    const orderUpdated = await prismaClient.order.update({
      where: {
        id: order.id
      },
      data: {
        status: true
      }
    });

    return orderUpdated;
  }
}

export default new DoneOrderService;
