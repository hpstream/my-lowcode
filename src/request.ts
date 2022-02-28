// import { LoginParams, Response } from "@/typings/auth";
import { login, getCurrentUser } from "@/api/auth";
const loginParams: any = { username: "zhufeng", password: "123456" };
login(loginParams).then((result: any) => {
  const token = result.data;
  window.sessionStorage.setItem("token", token);
  getCurrentUser().then((result) => {
    console.log(result.data);
  });
});
