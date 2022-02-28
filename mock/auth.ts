import { MockMethod } from "vite-plugin-mock";
// import fs from "fs"; // 请求是node环境
export default [
  {
    url: "/api/currentUser",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: "zhufeng"
      };
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      //url body,query headers
      return {
        code: 0,
        data: `${body.username}-token`
      };
    }
  }
] as MockMethod[];
