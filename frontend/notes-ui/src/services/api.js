import axios from "axios";

const API = axios.create({
  baseURL: "https://popaya-softwaredev-assignment-1.onrender.com"
});

export default API;