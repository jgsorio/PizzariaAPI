import { Request, Response } from "express";
import ListCategoryService from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const categories = await ListCategoryService.execute();
    return response.json(categories);
  }
}

export default new ListCategoryController;