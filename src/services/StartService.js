import api from "./api";

export const getStartUser = async (username) => {
  let star = 0;

  try {
    const data = await api.get(`/users/${username}/starred`);
    star = data.data.length;
    return star;
  } catch (error) {
    return star;
  }
};
