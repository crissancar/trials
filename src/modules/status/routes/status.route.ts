import { Request, Response, Router } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';
import container from '../../../config/dependency-injection';

export function register(router: Router) {
  const statusGetController: StatusGetController = container.get('Status.controllers.StatusGetController');

  router.get('/status', (req: Request, res: Response) => statusGetController.run(req, res));
}
