import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={180} height={60} priority />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">INICIO</Link>
            </li>
            <li>
              <Link href="/games">JUEGOS</Link>
            </li>
            <li>
              <Link href="/noticias">NOTICIAS</Link>
            </li>
            <li>
              <Link href="/top-10">TOP 20</Link>
            </li>
            <li>
              <Link href="/comunidad">COMUNIDAD</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <input type="text" placeholder="Buscar reseñas..." />
          <button>INICIA SESION</button>
          <button>REGISTRATE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
