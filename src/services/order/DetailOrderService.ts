import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        order: true
      }
    });

    if (!order) {
      throw new Error('Order does not exists');
    }

    return order;
  }
}

export default new DetailOrderService;
