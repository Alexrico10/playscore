const URL = "http://localhost:5000/platforms";

export const getPlatform = async () => {
  const platform = await fetch(URL);
  const data = platform.json();
  return data;
};
