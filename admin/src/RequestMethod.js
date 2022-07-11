import axios from "axios";

const Token = localStorage.getItem("accesToken");

export const userRequest = axios.create({
  headers : { token: `Bearer ${Token}` },
});
