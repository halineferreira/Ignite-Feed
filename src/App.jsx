import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Haline Silva" content="Bla bla bla" />
          <Post author="Haline Silva" content="Loren ipsun ..." />
        </main>
      </div>
    </>
  );
}

export default App;
