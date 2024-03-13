import { Request, Response } from 'express';
import SendOrderService from '../../services/order/SendOrderService';

class SendOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;
    const order = await SendOrderService.execute({ order_id });
    return response.json(order);
  }
}

export default new SendOrderController;
