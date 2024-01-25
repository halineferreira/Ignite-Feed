import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/halineferreira.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Haline Ferreira</strong>
              <time
                title="August, 1st at 09:01am"
                dateTime="2022-08-01 09:01:23"
              >
                About 1 hour ago
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size="24" />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Clap<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
