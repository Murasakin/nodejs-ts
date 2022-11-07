import express, { Request, Response } from 'express';
import router from './api/routes';

const app = express();
const port = 3000;

app.use('/api/', router);

app.listen(port, () => {
  console.log(`Server listening at port ${port}.`);
});
