import axios from "axios";
import { MAIN_URL } from "./Url";

export function registerUser(formdata) {
  return axios.post(`${MAIN_URL}fooddelivery/register`, formdata);
}

export function loginUser(data){
  return axios.post(`${MAIN_URL}fooddelivery/login`,data)
  console.log(data)
}