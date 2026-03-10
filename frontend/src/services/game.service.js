const URL = "http://localhost:5000/games";

export const getGames = async (page = 1) => {
  const response = await fetch(`${URL}?page=${page}`);
  const data = await response.json();
  return data;
};