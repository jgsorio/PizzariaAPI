import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: OrderRequest) {
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
        draft: false
      }
    });

    return orderUpdated;
  }
}

export default new SendOrderService;
