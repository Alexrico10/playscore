import styles from "./FeaturedGames.module.css";
import Image from "next/image";

const FeaturedGames = () => {
  return (
    <div className={styles.mainContainer}>
      <Image
        src="https://media.rawg.io/media/screenshots/0ba/0bae7160eedc1f7d85a8d2db70cf1ec9.jpg"
        alt="Fondo"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div className={styles.content}>
        <p>ÚLTIMOS JUEGOS DESTACADOS | DESCUBRE LO MEJOR DEL GAMING</p>
        <h2>ELDEN RING: SHADOW OF THE ERDTREE</h2>
        <button>LEER RESEÑAS</button>
      </div>
    </div>
  );
};

export default FeaturedGames;
