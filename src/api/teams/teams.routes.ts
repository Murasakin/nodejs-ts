import { Router } from 'express';
import { getTeams } from './teams.controller';

export const router = Router();

router.route('/').get(getTeams);
