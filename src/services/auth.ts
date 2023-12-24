import api from ".";

export const login = (loginData: any) => api.post("/user/login", loginData);
export const register = (loginData: any) => api.post("/user/register", loginData);