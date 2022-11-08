import { Router } from 'express';
import { getTeams, teamsErrorTest } from './teams.controller';
import * as Auth from './../middlewares/auth.middleware';

export const router = Router();

router.route('/').get(Auth.authorize(['getTeams']), getTeams);
router.route('/error').get(Auth.authorize(['getTeams']), teamsErrorTest);
