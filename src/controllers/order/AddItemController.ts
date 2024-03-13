import { Request, Response } from 'express';
import AddItemService from '../../services/order/AddItemService';

class AddItemController {
  async handle(request: Request, response: Response) {
    const { order_id, product_id, amount } = request.body;
    const item = await AddItemService.execute({ order_id, product_id, amount });
    return response.status(201).json(item);
  }
}

export default new AddItemController;
