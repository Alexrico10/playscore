import styles from "./page.module.css";
import { getGames } from "../../services/game.service";
import { getPlatform } from "../../services/platform.service";
import { getGenres } from "../../services/genre.service";
import GameCard from "../../components/GameCard/GameCard";
import Link from "next/link";

const GamePage = async ({ searchParams }) => {
  const params = await searchParams;
  const currentPage = parseInt(params.page) || 1;
  const games = await getGames(currentPage);
  const totalPages = games.totalPages;
  const platforms = await getPlatform();
  const genres = await getGenres();
  console.log(games.totalGames);

  let startPage = currentPage - 1;
  let endPage = currentPage + 1;

  if (startPage < 2) startPage = 2;
  if (endPage > totalPages - 1) endPage = totalPages - 1;

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={styles.encabezadoContainer}>
        <h1>Todos los juegos</h1>
        <p>{games.totalGames} resultados</p>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.filterPlatformsContainer}>
          Plataforma
          <select>
            {platforms.map((platform, index) => (
              <option key={index} value={platform.name}>
                {platform.name}
              </option>
            ))}
          </select>
          <input></input>
        </div>

        <div className={styles.filterGenresContainer}>
          Géneros
          <select>
            {genres.map((genre, index) => (
              <option key={index} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          <input></input>
        </div>

        <div className={styles.filterByOrderContainer}>
          Ordenar por
          <select>
            <option value="releaseDate">Fecha de lanzamiento</option>
            <option value="ratingBest">Mejor valorados</option>
            <option value="ratingWorst">Peor valorados</option>
            <option value="alphabetical">Alfabético</option>
          </select>
          <input></input>
        </div>

        <div className={styles.btnFilter}>
          <button>APLICAR FILTROS</button>
          <button>BORRAR FILTROS</button>
        </div>
      </div>

      <div className={styles.gamesContainer}>
        {games.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`}>
            <button className={styles.navButton}>Anterior</button>
          </Link>
        )}

        <Link href={`?page=1`}>
          <button className={currentPage === 1 ? styles.active : ""}>1</button>
        </Link>

        {startPage > 2 && <span className={styles.ellipsis}>...</span>}

        {pages.map((page) => (
          <Link key={page} href={`?page=${page}`}>
            <button className={page === currentPage ? styles.active : ""}>
              {page}
            </button>
          </Link>
        ))}

        {endPage < totalPages - 1 && (
          <span className={styles.ellipsis}>...</span>
        )}

        {totalPages > 1 && (
          <Link href={`?page=${totalPages}`}>
            <button className={currentPage === totalPages ? styles.active : ""}>
              {totalPages}
            </button>
          </Link>
        )}

        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`}>
            <button className={styles.navButton}>Siguiente</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default GamePage;
