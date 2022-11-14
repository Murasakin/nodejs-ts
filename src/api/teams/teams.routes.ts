import { Router } from 'express';
import {
  getTeams,
  teamsErrorTest,
  getTeamById,
  addTeam,
  updateTeamById,
  deleteTeamById,
} from './teams.controller';
import * as Auth from './../middlewares/auth.middleware';

export const router = Router();

router.route('/').get(Auth.authorize(['getTeams']), getTeams);
router.route('/error').get(Auth.authorize(['getTeams']), teamsErrorTest);
router.route('/:id').get(Auth.authorize(['getTeams']), getTeamById);
router.route('/').post(Auth.authorize(['addTeams']), addTeam);
router.route('/:id').patch(Auth.authorize(['updateTeams']), updateTeamById);
router.route('/:id').delete(Auth.authorize(['deleteTeams']), deleteTeamById);
