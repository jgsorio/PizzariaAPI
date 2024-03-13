import { Request, Response } from 'express';
import CreateOrderService from '../../services/order/CreateOrderService';

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { table, name } = request.body;
    const order = await CreateOrderService.execute({ table, name });
    return response.status(201).json(order);
  }
}

export default new CreateOrderController;
