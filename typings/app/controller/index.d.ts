// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportNews from '../../../app/controller/news';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    users: ExportUsers;
  }
}
