import { Router } from 'express';
import { router as teamsRoutes } from './teams/teams.routes';

const router = Router();

router.use('/teams', teamsRoutes);

export default router;
