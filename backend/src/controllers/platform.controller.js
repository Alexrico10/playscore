import prisma from "../config/prisma.js";

export const getPlatforms = async (req, res) => {
  try {
    const platforms = await prisma.platform.findMany();
    res.json(platforms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching platforms" });
  }
};
