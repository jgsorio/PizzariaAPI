import { Request, Response } from 'express';
import DetailUserService from '../../services/user/DetailUserService';

class DetailUserController {
  async handle(request: Request, response: Response) {
    const userDetail = await DetailUserService.execute(request.userId);
    return response.json(userDetail);
  }
}

export default new DetailUserController;
