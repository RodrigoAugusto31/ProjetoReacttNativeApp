import api from ".";

export const getStories = (token: string) => {
  return api.get("/stories", { headers: { Authorization: `Bearer ${token}` } });
};