// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportNews from '../../../app/service/news';
import ExportTest from '../../../app/service/test';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    news: AutoInstanceType<typeof ExportNews>;
    test: AutoInstanceType<typeof ExportTest>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}
