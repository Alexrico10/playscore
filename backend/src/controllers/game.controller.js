import prisma from "../config/prisma.js";

export const getGames = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;

    const skip = (page - 1) * limit;

    const games = await prisma.game.findMany({
      skip,
      take: limit,
    });

    const totalGames = await prisma.game.count();
    const totalPages = Math.ceil(totalGames / limit);

    res.json({
      page,
      limit,
      totalGames,
      totalPages,
      results: games,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching games" });
  }
};