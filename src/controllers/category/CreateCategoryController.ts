import { Request, Response } from 'express';
import CreateCategoryService from '../../services/category/CreateCategoryService';

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const category = await CreateCategoryService.execute({name});
    return response.status(201).json(category);
  }
}

export default new CreateCategoryController;