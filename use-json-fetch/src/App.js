import React from "react";
import Data from "./components/Data";

function App() {
  return (
    <>
      <Data endpoint={"data"} title={"Обычная загрузка"} />
      <Data endpoint={"error"} title={"Ошибка"} />
      <Data endpoint={"loading"} title={"Загрузка с задержкой"} />
    </>
  );
}

export default App;
