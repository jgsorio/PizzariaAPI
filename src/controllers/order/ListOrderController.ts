import { Request, Response } from 'express';
import ListOrderService from '../../services/order/ListOrderService';

class ListOrderController {
  async handle(request: Request, response: Response) {
    const orders = await ListOrderService.execute();
    return response.json(orders);
  }
}

export default new ListOrderController;