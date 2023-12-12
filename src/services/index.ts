import axios from "axios";

const api = axios.create({
  baseURL: "https://musicapi-w7kn.onrender.com",
});

export default api;