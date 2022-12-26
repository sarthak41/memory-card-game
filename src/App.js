import "./App.css";
import Card from "./components/Card";
import geraltImg from "./images/geralt-of-rivia.jpg";
import yenImg from "./images/yennefer-of-vengerberg.jpg";

function App() {
  return (
    <div>
      <Card image={geraltImg} title="Geralt of Rivia" />
      <Card image={yenImg} title="Yennefer" />
    </div>
  );
}

export default App;
