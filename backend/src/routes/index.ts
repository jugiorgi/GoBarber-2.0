import { Router } from 'express';
import usersRouter from './users.route';
import appointmentsRouter from './appointmens.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/appointments', appointmentsRouter);

export default routes;
