import { Router } from 'express';

export const createRouter = () => {
  let i = 0;
  const router = new Router();
  router.get('*', (req, res, next) => {
    i++;
    if (i % 2 === 0) {
      throw new Error('bulba');
    }
    res.send('1234');
  });
  return router;
};
