import { Router } from 'express';
// Import Routes
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Routes
routes.use('/appointments', appointmentsRouter);

export default routes;
