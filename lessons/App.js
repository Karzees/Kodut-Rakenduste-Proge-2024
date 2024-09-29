import React from "react";
import Counter from "./Counter";

function App() {
  const name = "Karl-Richard Kuus";
  const hobbies = ["Lugemine", "Arvutimängud"];

  return <Counter name={name} hobbies={hobbies} />;
}

export default App;