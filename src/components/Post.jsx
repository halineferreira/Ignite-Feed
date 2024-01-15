import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/halineferreira.png"
          />
          <div className={styles.authorInfo}>
            <strong>Haline Ferreira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="August, 1st at 09:01am" dateTime="2022-08-01 09:01:23">
          Published 1 hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Hi there 👋</p>
        <p>I'm studying ReactJS to improve my skills 🚀</p>
        <p>
          <a href="https://github.com/halineferreira">My Github</a>
        </p>
        <p>
          <a href="">#newProject</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  );
}
