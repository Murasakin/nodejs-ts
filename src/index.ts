import compression from 'compression';
import express, { Request, Response } from 'express';
import router from './api/routes';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './api/middlewares/logger.middleware';
import { generateToken } from './api/utils/jwt.utils';
import errorHandler from './api/middlewares/error-handler.middleware';
import * as MySQLConnector from './api/utils/mysql.connector';
import * as path from 'path';

const app = express();
const port = 3000;

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
  console.log('JWT', generateToken());
}

/**
 * Application level middlewares
 */
// create database pool
MySQLConnector.init();
// serve static files
app.use(express.static(path.join(__dirname, '../public')));
//compresses all the responses
app.use(compression());
//adding a set of security middlewares
app.use(helmet());
//parse incoming request body and append data to `req.body`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//enable all CORS request
app.use(cors());
// add logger middleware
app.use(logger);

app.use('/api/', router);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at port ${port}.`);
});
