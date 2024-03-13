import { Request, Response } from "express";
import DoneOrderService from "../../services/order/DoneOrderService";

class DoneOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;
    const order = await DoneOrderService.execute({ order_id });
    return response.json(order);
  }
}

export default new DoneOrderController;
