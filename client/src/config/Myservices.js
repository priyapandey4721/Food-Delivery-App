import axios from "axios";
import { MAIN_URL } from "./Url";
let token = sessionStorage.getItem("_token");

export function registerUser(formdata) {
  return axios.post(`${MAIN_URL}fooddelivery/register`, formdata);
}
export function loginUser(data) {
  return axios.post(`${MAIN_URL}fooddelivery/login`, data);
}
export function getProfile(email) {
  return axios.get(`${MAIN_URL}fooddelivery/getprofile/${email}`);
}
export function getMenu() {
  return axios.get(`${MAIN_URL}fooddelivery/getmenu`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export function placeOrders(data) {
  return axios.post(`${MAIN_URL}fooddelivery/placeorders`, data);
}
export function getOrder(email) {
  return axios.get(`${MAIN_URL}fooddelivery/getorders/${email}`);
}
