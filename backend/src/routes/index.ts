import { Router } from 'express';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.route';
import appointmentsRouter from './appointmens.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);

routes.use('/users', usersRouter);

routes.use('/appointments', appointmentsRouter);

export default routes;
