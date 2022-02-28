import http from "./http";
// import { LoginParams } from "@/typings/auth";
export function login(loginParams: any) {
  return http.post("/login", loginParams);
}
export function getCurrentUser() {
  return http.get("/currentUser");
}
