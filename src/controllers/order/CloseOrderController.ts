import { Request, Response } from 'express';
import CloseOrderService from '../../services/order/CloseOrderService';

class CloseOrderController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    await CloseOrderService.execute({ id });
    return response.status(204).json({});
  }
}

export default new CloseOrderController;
