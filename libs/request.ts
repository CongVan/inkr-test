import axios from "axios";

const request = axios.create({
  baseURL:
    (process.env.NEXT_APP_BASE_URL_API || "http://localhost:3000") + "/api",
});

export default request;
