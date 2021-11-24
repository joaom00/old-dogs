import 'dotenv/config';
import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(
  '/resized',
  express.static(path.resolve(uploadConfig.directory, 'resized'))
);
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
);

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333');
});
