import prisma from "../config/prisma.js";

export const getGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: "Error fetching genres" });
  }
};
