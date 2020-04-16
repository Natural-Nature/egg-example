import BaseService from "../core/BaseService";

class NewsService extends BaseService {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    /*
    const { data: idList } = await this.ctx.curl(
      `${serverUrl}/topstories.json`,
      {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
        dataType: "json",
      }
    );

    // parallel GET detail
    const newsList = await Promise.all(
      Object.keys(idList).map((key: string) => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: "json" });
      })
    );
    return newsList.map((res: any) => res.data);
    */
    return [
      {
        time: Math.floor(+new Date() / 1000),
        url: "http://www.baidu.com",
        title: "<p>百度搜索</p>",
      },
      {
        time: Math.floor(+new Date() / 1000 - 12 * 60),
        url: "http://www.baidu.com",
        title: "百度搜索2",
      },
    ];
  }
}

export default NewsService;
