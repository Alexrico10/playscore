import express from "express";
import gamesRoutes from "./routes/game.routes.js";
import platformsRoutes from "./routes/platform.routes.js"
import genreRoutes from "./routes/genre.routes.js"

const app = express();
app.use(express.json());


app.get("/", (req, res)=>{;
  res.send("Servidor arrancado");
})

app.use("/games", gamesRoutes);
app.use("/platforms", platformsRoutes);
app.use("/genres", genreRoutes)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriedno en http://localhost:${PORT}/`);
});