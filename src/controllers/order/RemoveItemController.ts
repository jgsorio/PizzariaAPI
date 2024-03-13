import { Request, Response } from 'express';
import RemoveItemService from '../../services/order/RemoveItemService';

class RemoveItemController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    await RemoveItemService.execute(id);
    return response.status(204).json({});
  }
}

export default new RemoveItemController;
