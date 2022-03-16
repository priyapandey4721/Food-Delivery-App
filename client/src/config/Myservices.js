import axios from "axios";
import { MAIN_URL } from "./Url";
let token=sessionStorage.getItem('_token');

export function registerUser(formdata) {
  return axios.post(`${MAIN_URL}fooddelivery/register`, formdata);
}

export function loginUser(data) {
  return axios.post(`${MAIN_URL}fooddelivery/login`, data);
}

export function getProfile(email){
  return axios.get(`${MAIN_URL}fooddelivery/getprofile/${email}`)
}

export function getMenu() {
  return axios.get(`${MAIN_URL}fooddelivery/getmenu`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function cartAdd(item,email){
  return axios.get(`${MAIN_URL}fooddelivery/cart/${item.Name}/${item.Price}/${email}`)
}