import { Router } from 'express';
import { getTeams } from './teams.controller';
import * as Auth from './../middlewares/auth.middleware';

export const router = Router();

router.route('/').get(Auth.authorize(['getTeams']), getTeams);
