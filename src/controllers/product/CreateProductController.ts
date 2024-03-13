import { Request, Response } from 'express';
import CreateProductService from '../../services/product/CreateProductService';

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, category_id } = request.body;
    if (!request.file) {
      return response.status(400).json({ error: 'File is required' });
    }
    const { originalname, filename: banner } = request.file;
    const product = await CreateProductService.execute({ name, price, description, banner, category_id });
    return response.status(201).json(product);
  }
}

export default new CreateProductController;
