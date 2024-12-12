import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const arr = [
    "C",
    "+",
    "-",
    "/",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "=",
    "7",
    "8",
    "9",
    ".",
    "0",
  ];

  const [text, setText] = useState("");

  const HandleByButtonClick = (textItem) => {
    if (textItem === "C") {
      setText("");
    } 
    else if (textItem === "=") {
      const result = eval(text);
      setText(result);
    } 
    else {
      const newDisplayValue = text + textItem;
      setText(newDisplayValue);
    }
  };

  return (
    <>
      <Container>
        <Display DisplayText={text}></Display>
        <Buttons list={arr} change={HandleByButtonClick}></Buttons>
      </Container>
    </>
  );
}

export default App;
