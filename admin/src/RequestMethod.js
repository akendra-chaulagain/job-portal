import axios from "axios";
const Token = localStorage.getItem("accesToken");
console.log(Token);

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
