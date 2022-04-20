import { BaseAPI } from "./Base";

class TitleAPI extends BaseAPI {
  constructor() {
    super();
    this.resource = "/title";
  }

  getPageConfig() {
    return new Promise<any>((resolve) => {
      // Fake call API
      import("../../../data/index").then(
        ({ TITLE, RELATED_TITLES, CHAPTERS, COMMENTS }) => {
          resolve({
            title: TITLE,
            relatedTitles: RELATED_TITLES,
            chapters: CHAPTERS,
            comments: COMMENTS,
          });
        }
      );
    });
  }
}
export default new TitleAPI();
