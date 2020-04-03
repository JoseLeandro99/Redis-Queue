import { Router } from 'express';

import userController from './app/controllers/userController';

const routes = Router();

routes.post('/users', userController.store);

export default routes;