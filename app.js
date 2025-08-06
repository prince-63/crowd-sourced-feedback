import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(userRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

export default app;
