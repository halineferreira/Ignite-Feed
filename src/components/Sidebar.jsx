import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=50&w=500"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/halineferreira.png"
        />

        <strong>Haline Ferreira</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size="20px" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
