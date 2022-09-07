import "./styles.css";
import { useState } from "react";
import Button from "./components/FuncButtons";

export default function App() {
  const [buttonTexts, setButtonTexts] = useState([
    { id: 1, text: "btn1" },
    { id: 2, text: "btn2" },
    { id: 3, text: "btn3" },
    { id: 4, text: "btn4" },
    { id: 5, text: "btn5" }
  ]);

  function deleteHandler(id) {
    const newButtonTexts = buttonTexts.filter((e) => e.id !== id);
    setButtonTexts(newButtonTexts);
  }

  const buttons = buttonTexts.map((textRecord) => (
    <Button
      key={textRecord.id}
      textRecord={textRecord}
      deleteEventHandler={deleteHandler}
    />
  ));
  return <div className="App">{buttons}</div>;
}
