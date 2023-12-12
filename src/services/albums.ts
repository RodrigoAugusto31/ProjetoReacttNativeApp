import api from ".";

export const getAlbums = (token: string) => {
  return api.get("/albums", { headers: { Authorization: `Bearer ${token}` } });
};