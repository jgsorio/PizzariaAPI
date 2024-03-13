import { Request, Response } from 'express';
import DetailOrderService from '../../services/order/DetailOrderService';

class DetailOrderController {
  async handle(request: Request, response: Response) {
    const { id: order_id } = request.params;
    const order = await DetailOrderService.execute({ order_id });
    return response.json(order);
  }
}

export default new DetailOrderController;