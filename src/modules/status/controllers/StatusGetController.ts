import { Controller } from '../../shared/controllers/Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export class StatusGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send();
  }
}
