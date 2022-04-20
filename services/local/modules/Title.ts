import { BaseAPI } from "./Base";

class TitleAPI extends BaseAPI {
  constructor() {
    super();
    this.resource = "/title";
  }

  async getPageConfig() {
    const { data } = await this.request.get(this.resource);
    console.log("page config", data);

    return data;
  }
}
export default new TitleAPI();
