import Image from "next/image";
import styles from "./GameCard.module.css";

const GameCard = ({ game }) => {
  const tinyBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAuMB9F0d43AAAAAASUVORK5CYII=";

  return (
    <div className={styles.gameCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://res.cloudinary.com/duuyzww55/image/fetch/w_255,h_255,c_fill/${game.imageUrl}`}
          alt={game.name}
          width={255}
          height={255}
          quality={75}
          style={{ objectFit: "cover", borderRadius: "8px" }}
          placeholder="blur"
          blurDataURL={tinyBlur}
        />
      </div>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
    </div>
  );
};

export default GameCard;
