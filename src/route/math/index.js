// @flow
import { Router } from 'express';
import divideController from './divideController';

export default () => {
  const router = new Router();
  router.get('/', ...divideController);
  return router;
};
