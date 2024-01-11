import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Post author="Haline Silva" content="Bla bla bla" />
      <Post author="Haline Silva" content="Loren ipsun ..." />
      <Post />
      <Post />
    </>
  );
}

export default App;
