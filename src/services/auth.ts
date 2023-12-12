import api from ".";

export const login = (loginData: any) => api.post("/user/login", loginData);