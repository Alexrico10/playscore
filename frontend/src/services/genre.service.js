const URL = "http://localhost:5000/genres";

export const getGenres = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
