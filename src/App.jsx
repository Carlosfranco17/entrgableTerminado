import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo.jsx";
import db from "./database/db.json";

function App() {

  const imagenes=["bg1","bg2","bg3","bg4"]

  const aleatoria = (lissItems) => {
    const numberRandom = Math.floor(Math.random() * lissItems.length);

    return lissItems[numberRandom];
  };
  const [quoete, setQuoete] = useState(aleatoria(db));

  function CambiarFrase(){
  setQuoete(aleatoria(db))
  }

  return (
    <div className={`App ${aleatoria(imagenes)}`}>
     
  <ContainerInfo quoete={quoete} CambiarFrase={CambiarFrase} />
    </div>
  );
}

export default App;
