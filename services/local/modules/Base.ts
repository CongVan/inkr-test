import { AxiosInstance } from "axios";
import request from "../../../libs/request";

export class BaseAPI {
  protected resource;
  protected request: AxiosInstance;
  constructor() {
    this.request = request;
  }
}
