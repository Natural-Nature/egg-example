// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportGzip from '../../../app/middleware/gzip';
import ExportRobot from '../../../app/middleware/robot';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    gzip: typeof ExportGzip;
    robot: typeof ExportRobot;
  }
}
